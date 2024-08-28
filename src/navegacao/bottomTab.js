import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavegacaoStackAtv from './stackAtividades';
import NavegacaoStackEx from './stackExemplos';

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, textAlign: 'center' },
        tabBarActiveTintColor: '#F05545',
        tabBarInactiveTintColor: '#fafafa',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#7F0000',
          // marginTop: 0,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center"
        }
      }}
    >
      <Tab.Screen
        name="Exemplos"
        component={NavegacaoStackEx}
        options={{
          //tabBarLabel: 'Profile', 
          //tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let color = focused ? '#F05545' : '#fafafa';
            return <MaterialIcons name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={NavegacaoStackAtv}
        options={{
          //tabBarLabel: 'Profile', 
          //tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            color = focused ? '#F05545' : '#fafafa';
            return <MaterialIcons name="filter-list" size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}