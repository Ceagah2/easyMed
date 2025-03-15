
import { ThemeProvider } from '@/data/context/theme.context';
import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';
import { Button, Container, Toggle } from '../presentation/components/atoms';


export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <Text>Teste</Text>
        <Button
          text="Configurações"
          icon="settings"
          iconLibrary={Ionicons}
          iconSize={24}
          iconColor="yellow"
        />
        <Toggle />
      </Container>
    </ThemeProvider>
  );
}