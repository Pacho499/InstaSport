import { StyleSheet, View , ScrollView} from 'react-native';
import Post from '../components/Post'
import Data from '../data/fake-data'

export default function Home(props) {
  const posts = Data.map(data => {
    return (
      <Post 
      key={data.id} 
      imageUri={data.userImage} 
      userName={data.userName} 
      image={data.image} 
      onPressImage={() => props.navigation.navigate('PostDetail', {
        postId: data.id,
        title: data.title
      })}/> )
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        {posts}
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae8e8',
    alignItems: 'center'
  },
});