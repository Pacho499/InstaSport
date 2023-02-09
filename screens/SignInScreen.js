import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {signin} from '../store/action/authUser';
import {useDispatch} from 'react-redux';
const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const onPressSignIn = () => {
      dispatch(signin(email,password))
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email</Text>
      <TextInput keyboardType='email-address' value={email} onChangeText={value => setEmail(value)} style={styles.input} placeholder='Email'/>
      <Text style={styles.title}>Password</Text>
      <TextInput secureTextEntry='true' value={password} onChangeText={value => setPassword(value)} style={styles.input} placeholder='Password'/>
      <Button title='Signin' onPress={onPressSignIn}/>
      <Button title='Go to signup' onPress={() => navigation.navigate('signUp')}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
    },
    input: {
        borderBottomWidth: 1,
        width: '90%',
        paddingBottom: 5,
        paddingLeft: 5,
        marginTop: 10
    },
    title:{
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20 
    }
})

export default SignIn;
