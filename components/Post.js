import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper'
import Ionicons from '@expo/vector-icons/Ionicons';

const Post = props => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', padding:10, alignItems: 'center'}} >
                <Image source={{uri: props.imageUri}} style={styles.userImage}/>
                <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <Image source={{uri:props.image}} style={styles.postImage}/>
            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Ionicons style={{ marginLeft: 10, marginTop: 10}} name='md-heart-outline' size={28} color="black" />
                <Ionicons style={{ marginRight: 10, marginTop: 10}} name='md-bookmark' size={28} color='black'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3 ,
        marginVertical:10,
         shadowColor: 'black',
        shadowOpacity : 0.2, 
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: '#fff'
    },
    userImage:{
        width: SCREEN_HEIGHT / 15 ,
        height: SCREEN_HEIGHT / 15 ,
        borderRadius:30,
        elevation: 2,

    },
    postImage:{
        width:SCREEN_WIDTH,
        height: SCREEN_HEIGHT/6,
    },
    userName:{
        marginLeft : 10,
        fontSize: 25,
    }
})

export default Post; 