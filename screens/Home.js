import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import { HomeContainer, JournalText, JournalTitle } from "../styles/Home.style";

const data = [
  {
    name: "Journal 1",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    name: "Journal 2",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    name: "Journal 3",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    name: "Journal 4",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
];

export default function Home() {
  const date = new Date().toDateString();
  const newdate = date.slice(4, 10);

  return (
    <SafeAreaView>
      <HomeContainer>
        <View style={style.date}>
          <Text style={{ fontFamily: "Gilroy-Light" }}>Today - {newdate}</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <View style={{marginTop: 30}}>
                <JournalTitle>{item.name}</JournalTitle>
                <JournalText>{item.text}</JournalText>
                </View>
            );
          }}
          style={style.verticleList}
        />
      </HomeContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  date: {
    top: 40,
  },
  verticleList: {
    top: 80,
    width: "92%"
  }
});
