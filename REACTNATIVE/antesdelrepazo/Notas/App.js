import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListGrades } from './app/screens/ListGrades';
import { GradeForm } from './app/screens/GradeForm';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContenidoA } from './app/screens/ContenidoA';
import { ContenidoB } from './app/screens/ContenidoB';
import { Icon } from '@rneui/base';

export default function App() {
  const StackGrades = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();


  const TabNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='TabContenidoA'
          component={ContenidoA}
          options={{
            tabBarLabel: 'Contenido A',
            tabBarIcon: () => {
              return <Icon></Icon>
            }
          }}
        />
        <Tab.Screen
          name='TabContenidoB'
          component={ContenidoB}
          options={{
            tabBarLabel: 'Contenido B',
            tabBarIcon: () => {
              return <Icon></Icon>
            }
          }}
        />

      </Tab.Navigator>)
  }

  const GradesStack = () => {
    return (
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrades} />
        <StackGrades.Screen name='GradeFormNav' component={GradeForm} />
      </StackGrades.Navigator>
    );
  }


  const DrawerNav = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name='GradesStack'
          component={GradesStack}
          options={{ title: 'Productos' }}
        />
        <Drawer.Screen
          name='EjemploTabs'
          component={TabNav} // Debes reemplazar esto con un componente real
          options={{ title: 'Ejemplo tabs' }}
        />
        <Drawer.Screen
          name='FinSesion'
          component={GradesStack} // Debes reemplazar esto con un componente real
          options={{ title: 'Finalizar sesión' }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}