import { View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Easing, TurboModuleRegistry } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { HomeContainer, JournalText, JournalTitle, SkeltonName, SkeltonPost, SkeltonLast } from "../styles/Home.style";
import axios from "../axios";


const skelton = [
  {
    name: "",
    post: "",
    blah: ""
  },
  {
    name: "",
    post: "",
    blah: ""
  },
  {
    name: "",
    post: "",
    blah: ""
  },
  {
    name: "",
    post: "",
    blah: ""
  },
  {
    name: "",
    post: "",
    blah: ""
  },
  {
    name: "",
    post: "",
    blah: ""
  },
]

const date = new Date().toDateString();
const newdate = date.slice(4, 10);

export default function Home() {
  const [myArticles, setMyArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const myValue = useRef(new Animated.Value(0)).current

  

  useEffect(() => {
    const articles = async () => {
      await axios
        .get("/articles/sync")
        .then((res)=>{
          setMyArticles(res.data)
          Animated.timing(myValue,{
            useNativeDriver: true,
            duration: 3000,
            toValue: 5,
            easing: Easing.ease
          }).start()
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    articles();
  }, []);
  
  setTimeout(() => {
    setLoading(false)
  }, 2000);


  return (
    <SafeAreaView>
      <HomeContainer>
        <View style={{top: 40}}>
          <Text style={{ fontFamily: "Gilroy-Light" }}>Today - {newdate}</Text>
        </View>
        {!loading ? (
          <FlatList
            data={myArticles}
            keyExtractor={(_, index) => index.toString()}
            pagingEnabled
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: 20 }}>
                  <JournalTitle>{item.name}</JournalTitle>
                  <JournalText>{item.post}</JournalText>
                </View>
              );
            }}
            style={style.verticleList}
          />
        ) : (
          <FlatList
          data={skelton}
          keyExtractor={(_, index) => index.toString()}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <Animated.View style={{ marginTop: 20, opacity: myValue }}>
                <SkeltonName>{item.name}</SkeltonName>
                <SkeltonPost >{item.post}</SkeltonPost>
                <SkeltonLast >{item.blah}</SkeltonLast>
              </Animated.View>
            );
          }}
          style={style.skeltonList}
        />
        )}
      </HomeContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  verticleList: {
    top: 80,
    width: "92%",
  },
  skeltonList: {
    top: 80,
    width: "92%",
  }
});
