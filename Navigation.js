import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/HomeScreen';
import PostDetail from './screens/PostDetailScreen';
import Profile from './screens/ProfileScreen';
import SavedPost from './screens/SavedPostScreen';
import HeaderButton from './components/HeaderButton';
import CreatePost from './screens/CreatePostScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerLeft: () => (
            <HeaderButton left={true} onPressLeft={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <HeaderButton onPressRight={() => navigation.navigate('CreatePost')} />
          )
        })}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={({route}) => ({title: route.params.title})}
        name='PostDetail'
        component={PostDetail}
      />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='CreatePost' component={CreatePost} />
    </Stack.Navigator>
  );
}

function SavedStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerLeft: () => (
            <HeaderButton left={true} onPressLeft={() => navigation.toggleDrawer()} />
          ),
          title : 'Saved Post'
        })}
        name='SavedPost'
        component={SavedPost}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{header: () => null}}
        initialRouteName='Home'
      >
        <Drawer.Screen
          options={{title: 'Home'}}
          name='HomeDrawer'
          component={HomeStackNavigation}
        />
        <Drawer.Screen
          options={{title: 'Saved Post'}}
          name='SavedPostDrawer'
          component={SavedStackNavigation}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
