import styled from "styled-components/native";

export const MainContainer = styled.View`
  background-color: #413d62;
  display: flex;
  flex: 1;
`;

export const MainBody = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const MainImage = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: -30px;
`;

export const ImageBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ wt }) => wt};
  height: ${({ ht }) => ht};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.color3};
  margin: 10px;
`;

export const Picture = styled.Image`
  height: ${({ hh }) => hh};
  width: ${({ ww }) => ww};
  overflow: hidden;
  object-fit: contain;
`;

export const MainTitle = styled.View`
  top: 180px;
  right: 10px;
  max-width: 350px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.color3};
  font-family: "Gilroy-Extra";
  font-size: 120px;
  letter-spacing: normal;
  line-height: 110px;
`;

export const MainDescription = styled.View`
  top: 90px;
  max-width: 350px;
`;
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.color4};
  line-height: 25px;
`;

export const MainButton = styled.TouchableOpacity`
  top: 50px;
  background-color: ${({ theme }) => theme.colors.color3};
  width: 100%;
  height: 55px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.color1};
  letter-spacing: 1px;
  font-weight: 500px;
`;
