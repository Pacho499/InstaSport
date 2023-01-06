import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH} from '../utils/helper';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SavedPost(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.image}} style={styles.postImage} />
      <Text style={styles.userName}>{props.userName}</Text>
      <TouchableOpacity onPress={props.onRemovePost}>
        <Ionicons
          style={styles.saveImage}
          name='trash'
          size={32}
          color='black'
        />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  postImage: {
    height: 100,
    width: SCREEN_WIDTH / 3,
  },
  userName: {
    fontSize: 20,
    fontWeight: '500',
  },
});
