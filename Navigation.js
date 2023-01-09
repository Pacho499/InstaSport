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
import SignIn from './screens/SignInScreen';
import SignUp from './screens/SignUpScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerLeft: () => (
            <HeaderButton
              left={true}
              onPressLeft={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <HeaderButton
              onPressRight={() => navigation.navigate('CreatePost')}
            />
          ),
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
            <HeaderButton
              left={true}
              onPressLeft={() => navigation.toggleDrawer()}
            />
          ),
          title: 'Saved Post',
        })}
        name='SavedPost'
        component={SavedPost}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
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
  );
}

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName='signIn'>
      <Stack.Screen
        options={{title: 'Sign in'}}
        name='signIn'
        component={SignIn}
      />
      <Stack.Screen
        options={{title: 'Sign Up'}}
        name='signUp'
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

function mainNavigation() {
  const userToken = null;
  return (
    <NavigationContainer>
      {userToken ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
export default mainNavigation;
