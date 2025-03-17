import { Container } from "@/presentation/components/atoms";
import { Header } from "@/presentation/components/molecules/header";
import { Text } from 'react-native';

export default function Medicines(){
  return(
    <Container>
      <Header />
      <Text>Medicamentos</Text>
    </Container>
  )
}