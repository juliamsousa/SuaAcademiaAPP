import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoHome from "../../../assets/LogoHome";
import ArrowRight from '../../../assets/ArrowRight';
import {
    Title,
    SubTitle,
    Paragraph,
    BlackButton,
    ButtonText,
    ArrowContainer,
    styles
} from './styles';

export default function HomeScreen() {
  return (
    <LinearGradient
    colors={['#FF4275', '#A154F2']}
    style={styles.linearGradient}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Title>Sua Academia</Title>
        <LogoHome/>
        <SubTitle>Boas vindas!</SubTitle>
        <Paragraph>Acompanhe seus treinos {"\n"} pelo aplicativo</Paragraph>
        <BlackButton>
          <ButtonText>
            Começar 
          </ButtonText>
          <ArrowContainer>
            <ArrowRight/>
          </ArrowContainer>
        </BlackButton>
      </View>
    </LinearGradient>
  );
}

