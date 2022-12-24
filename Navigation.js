import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen'
import PostDetail from './screens/PostDetailScreen'
import Profile from './screens/ProfileScreen'
import SavedPost from './screens/SavedPostScreen'
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SavedPost" component={SavedPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;