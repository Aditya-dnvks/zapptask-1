import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalDetails from './src/components/PersonalDetails';
import BankDetails from './src/components/BankDetails';
import FinalPage from './src/components/FinalPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PersonalDetails" component={PersonalDetails}/>
      <Stack.Screen name="BankDetails" component={BankDetails}/>
      <Stack.Screen name="FinalPage" component={FinalPage}/>
    </Stack.Navigator>
  </NavigationContainer>);
};

export default App;
