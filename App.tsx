import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BabyProfilesScreen from './src/screens/BabyProfilesScreen';
import DailyLogsScreen from './src/screens/DailyLogsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Little Ledger' }}
                />
                <Stack.Screen
                    name="BabyProfiles"
                    component={BabyProfilesScreen}
                    options={{ title: 'Baby Profiles' }}
                />
                <Stack.Screen
                    name="DailyLogs"
                    component={DailyLogsScreen}
                    options={{ title: 'Daily Logs' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}