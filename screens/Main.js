import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
  Touchable,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {
  MainContainer,
  MainBody,
  MainTitle,
  MainImage,
  MainDescription,
  MainButton,
  ImageBox,
  Picture,
  Title,
  Description,
  ButtonText,
} from "../styles/Main.style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Main() {
  return (
    <MainContainer>
      <MainBody>
        <MainImage>
          <ImageBox style={style.imageOne} wt="150px" ht="190px">
            <Picture
              alt=""
              source={require("../assets/img1.png")}
              hh="140px"
              ww="120px"
            />
            <Text
              style={{
                marginTop: 10,
                fontFamily: "Gilroy-Light",
              }}
            >
              Amazed
            </Text>
          </ImageBox>
          <ImageBox style={style.imageTwo} wt="180px" ht="220px">
            <Picture
              alt=""
              source={require("../assets/img3.png")}
              hh="180px"
              ww="130px"
            />
            <Text
              style={{
                marginTop: 10,
                fontFamily: "Gilroy-Light",
              }}
            >
              Cheerful
            </Text>
          </ImageBox>
          <ImageBox style={style.imageThree} wt="150px" ht="190px">
            <Picture
              alt=""
              source={require("../assets/img2.png")}
              hh="150px"
              ww="120px"
            />
            <Text
              style={{
                marginTop: 10,
                fontFamily: "Gilroy-Light",
              }}
            >
              Stressed
            </Text>
          </ImageBox>
        </MainImage>
        <MainTitle>
          <Title>
            mood<Text style={{ color: "#C1BDE5" }}>diary</Text>
          </Title>
        </MainTitle>
        <MainDescription>
          <Description>
            Use the mood dairy to track your state and get tips how to improve
            your state
          </Description>
        </MainDescription>
          <MainButton>
            <ButtonText>Update my diary</ButtonText>
          </MainButton>
      </MainBody>
    </MainContainer>
  );
}

const style = StyleSheet.create({
  imageOne: {
    position: "absolute",
    transform: [{ rotate: "-20deg" }],
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 50,
    right: 33,
  },
  imageTwo: {
    position: "absolute",
    zIndex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: 1,
  },
  imageThree: {
    position: "absolute",
    transform: [{ rotate: "20deg" }],
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 50,
    left: 33,
  },
});
