import { View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Easing} from "react-native";
import React, { useState, useRef } from "react";
import {
  WritingContainer,
  VerticleComponent,
  WritingButton,
  WritingButtonText,
  EmojiBox,
} from "../styles/Writing.style";
import { Picture } from "../styles/Main.style";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const moods = [
  {
    name: "cheerful",
    img: "../assets/m1.png",
  },
  {
    name: "relaxed",
    img: "../assets/m1.png",
  },
  {
    name: "neutral",
    img: "../assets/m1.png",
  },
  {
    name: "amazed",
    img: "../assets/m1.png",
  },
  {
    name: "love",
    img: "../assets/m1.png",
  },
];

const date = new Date().toDateString();
const newdate = date.slice(4, 10);

export default function Writing({navigation}) {
  const [name ,setName] =  useState("")
  const [input ,setInput] =  useState("")
  const [posting, setPosting] = useState(false)

  console.log(name,input)

  
  const postArticle = async () =>{
    navigation.navigate("Home")
    // setPosting(true)
    // await axios
    // .post("/api/articles/new",{
    //   name,
    //   post: input
    // })
    // .then(()=>{
    //   setPosting(false)
    //   navigation.navigate("Home")
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }

  const emojiName = (name) =>{
    setName(name)
  }


  return (
    <SafeAreaView>
      <WritingContainer>
        <View style={style.date}>
          <Text style={{ fontFamily: "Gilroy-Light" }}>Today - {newdate}</Text>
        </View>
        <VerticleComponent ht="250px" 
        style={{
            bottom: 30
        }}
        >
          <View style={style.horizontalListTitle}>
            <Text style={style.horizontalListText}>Hi, Irtaza</Text>
            <Text style={style.horizontalListTextTwo}>
              How are you feeling today?
            </Text>
          </View>
            <FlatList 
            data={moods}
            keyExtractor={(_,index)=>index.toString()}
            horizontal
            pagingEnabled
            renderItem={({item})=>{
                return(
                    <EmojiBox wt="120" ht="120" onPress={(e)=>emojiName(item.name)}>
                    <Picture
                      alt=""
                      source={require("../assets/img4.png")}
                      hh="50"
                      ww="50"
                    />
                    <Text
                      style={{
                        fontFamily: "Gilroy-Light",
                        marginTop: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                  </EmojiBox>
                )
            }}
            style={style.horizontalList}
            />
        </VerticleComponent>
        <VerticleComponent ht="200px" 
        
        style={style.inputContainer}>
          <View>
            <Text style={style.inputTitel}>Describe your state of mind</Text>
          </View>
          <View>
            <TextInput 
            multiline={true}
            style={style.input}
            placeholder="Write here about your day"
            value={input}
            onChangeText={(text) => {
              setInput(text)
            }}
            />
          </View>
        </VerticleComponent>
        <WritingButton onPress={()=>{
          postArticle()
          }}>
          <WritingButtonText>{!posting ? "Go to my journal" : "Posting"}</WritingButtonText>
        </WritingButton>
      </WritingContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  date: {
    bottom: 10
  },
  horizontalListTitle: {
    top: 10,
    right: 20,
  },
  horizontalListText: {
    fontFamily: "Gilroy-Light",
    fontSize: 17,
  },
  horizontalListTextTwo:{
    fontSize: 27
  },
  inputTitel: {
    fontFamily: "Gilroy-light",
    fontSize: 25,
    bottom: 10,
    right: 30
  },
  horizontalList: {
    marginVertical: 25,
  },
  inputContainer: {
    bottom: 40,
    width: "100%",
    height: "50%"
  },
  input: {
    backgroundColor: "#ebebed",
    width: 350,
    height: 260,
    borderRadius: 20,
    textAlignVertical: "top",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    top: 5
  }
});
