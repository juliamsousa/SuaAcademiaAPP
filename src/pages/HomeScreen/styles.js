import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Title = styled.Text`
  
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 30px;

  color: #000000;
`

export const SubTitle = styled.Text`
  
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;

  color: #000000;
`
export const Paragraph = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;

  color: #16182C;
`

export const BlackButton = styled.TouchableOpacity`
  
  width: 280px;
  height: 50px;  
  background: black;
  border-radius: 25px;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: -40px;

  color: #FFFFFF;
`
export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
`

export const ArrowContainer = styled.View`
  position: relative;
  left: 70px;

  color: #FFFFFF;
`

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 100,
    marginTop: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
