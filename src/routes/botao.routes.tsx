import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../pages/user';
import List from '../pages/list';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function Botoes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false // sem a barra do cabeçalho
      }}
      tabBar={pros => <CustomTabBar {...pros}
      />}
    >
      <Tab.Screen
        name="List"
        component={List}
      />
      <Tab.Screen
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
}