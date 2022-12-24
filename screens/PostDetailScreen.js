import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Data from '../data/fake-data'

export default function PostDetail(props) {
  const {postId} = props.route.params
  const PostData = Data.find(post => post.id === postId)
  return (
    <View style={styles.container}>
      <Text>PostDetail</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});