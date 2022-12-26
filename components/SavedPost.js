import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import {SCREEN_WIDTH} from '../utils/helper'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SavedPost(props) {
    const saveIcons = props.save ? 'bookmark' : 'bookmark-outline'
    const imageUri = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.postImage}/>
      <Text style={styles.userName}>Billy</Text>
      <TouchableOpacity>
            <Ionicons style={styles.saveImage} name={saveIcons} size={28} color='black' />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa', 
    width: SCREEN_WIDTH - 20,
    height: 130, 
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  postImage:{
    height: 100,
    width: SCREEN_WIDTH / 3
  },
  userName:{
    fontSize: 20,
    fontWeight:'500'
  }
});