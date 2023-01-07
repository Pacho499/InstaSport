import React, {useEffect,useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import Post from '../components/Post';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../store/action/fetchPost';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false)
  const allPosts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchPost()).then(() => {
      setIsLoading(false)
    });
  }, []);
  const posts = allPosts.map((data) => {
    return (
      <Post
        key={data.id}
        imageUri={data.userImage}
        userName={data.userName}
        image={data.image}
        id={data.id}
        onPressImage={() =>
          props.navigation.navigate('PostDetail', {
            postId: data.id,
            title: data.title,
          })
        }
      />
    );
  });
  const loading = () => {
    return(
      <View>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>{isLoading ? loading() : posts}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae8e8',
    alignItems: 'center',
  },
});
