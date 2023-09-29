import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import CreateScreen from "./CreateScreen";
import RewardScreen from "./RewardScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: true}}
        />
        <Tab.Screen name="Create" component={CreateScreen} options={{headerShown: true}} />
        <Tab.Screen name="Reward" component={RewardScreen} options={{headerShown: true}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;