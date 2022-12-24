import { StyleSheet, Text, View, Button } from 'react-native';
import Post from '../components/Post'
import Data from '../data/fake-data'

export default function Home(props) {
  const posts = Data.map(data => {
    return <Post imageUri={data.userImage} userName={data.userName} image={data.image} /> 
  })
  return (
    <View style={styles.container}>
      {posts}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});