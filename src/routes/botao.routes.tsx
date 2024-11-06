import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../pages/user';
import List from '../pages/list';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProviderList } from '../context/authContext_list';

const Tab = createBottomTabNavigator();

export default function Botoes() {
  return (// o AuthProvider engloba todas as telas explicidas 
    <AuthProviderList>
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
    </AuthProviderList>
  );
}