import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Login from './src/pages/login';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Login/>
    </View>
  );
}
