import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import GstCalculator from '../screens/gstCalculators';
import AgeCalculator from '../screens/ageCalculator';
import EMICalculator from '../screens/EmiCalculator';
import FDCalculator from '../screens/fdCalculator';
const Stack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GstCalculator"
          component={GstCalculator}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AgeCalculator"
          component={AgeCalculator}
          options={{headerShown: true}}
        />
          <Stack.Screen
          name="EMICalculator"
          component={EMICalculator}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="FDCalculator"
          component={FDCalculator}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
