import styled from "styled-components";

export const WritingContainer = styled.View`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

export const VerticleComponent = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: ${({ht})=>ht};
` 

export const WritingButton = styled.TouchableOpacity`
  background-color:  ${({ theme }) => theme.colors.color1};
  width: 85%;
  height: 55px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WritingButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.color3};
  font-family: "Gilroy-Light";
  letter-spacing: 1px;
  font-weight: 500px;
`;

export const EmojiBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ wt }) => wt};
  height: ${({ ht }) => ht};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.color5};
  margin: 10px;
`;