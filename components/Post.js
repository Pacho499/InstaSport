import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import {savePost} from '../store/action/savePost'
const Post = props => {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const dispatch = useDispatch();

    let lastTap = null
    const onPressLike = () => {
        const now = Date.now()
        const time_delay = 400
        if (lastTap && (now - lastTap) < time_delay){
            setLike(!like)
        }else{
            lastTap = now
        }
    }

    const onPressSave = () => {
        setSave(!save)
        const postToSave = {
            userName: props.userName,
            postImage: props.image,
            id: props.id
        }
        dispatch(savePost(postToSave))
    }
    const heartColor = like ? 'red' : 'black'
    const saveColor = save ? 'green' : 'black'
    const heartIcons = like ? 'md-heart' : 'md-heart-outline'
    const saveIcons = save ? 'bookmark' : 'bookmark-outline'
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', padding:10, alignItems: 'center'}} >
                <Image source={{uri: props.imageUri}} style={styles.userImage}/>
                <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <TouchableOpacity onPress={props.onPressImage}>
               <Image source={{uri:props.image}} style={styles.postImage}/> 
            </TouchableOpacity>
            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={onPressLike}>
                   <Ionicons style={{ marginLeft: 10, marginTop: 10}} name={heartIcons} size={28} color={heartColor} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSave}>
                    <Ionicons style={{ marginRight: 10, marginTop: 10}} name={saveIcons} size={28} color={saveColor} />
                </TouchableOpacity>
                
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