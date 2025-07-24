import {View} from 'react-native';
import './gesture-handler';
import Routes from './src/routes/index.routes';// Importação das Rotas de navegação
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}