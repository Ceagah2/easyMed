
import { Container } from '@/presentation/components/atoms';
import { Header } from '@/presentation/components/molecules/header';
import React from 'react';
import { Text } from 'react-native';


export default function App() {

  return (
    <Container>
      <Header />
      <Text>Home</Text>
    </Container>
  );
}