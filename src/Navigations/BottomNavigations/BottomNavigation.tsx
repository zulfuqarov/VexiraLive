import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from '../StackNavigations/HomeStack';
import ProfileStack from '../StackNavigations/ProfileStack';
import SearchStack from '../StackNavigations/SearchStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../type/NavigationsType/NavType';

import { GlobalColor } from '../../colors/GlobalColor';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: GlobalColor.primary,
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 5,
                    borderTopColor: GlobalColor.primary,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

