import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import Add from './Add.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#8507a1',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Registration Home',
                    }}
                />
                <Stack.Screen
                    name="Add"
                    component={Add}
                    options={{
                        title: 'Add New User',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
