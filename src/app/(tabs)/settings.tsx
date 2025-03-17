import { Container } from "@/presentation/components/atoms";
import { Header } from "@/presentation/components/molecules/header";
import { Text } from 'react-native';

export default function Settings(){
  return(
    <Container>
      <Header />
      <Text>Config</Text>
    </Container>
  )
}