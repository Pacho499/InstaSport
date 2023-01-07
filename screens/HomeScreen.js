import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Post from '../components/Post';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../store/action/fetchPost';

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  });
  const allPosts = useSelector((state) => state.posts.posts);
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
  return (
    <View style={styles.container}>
      <ScrollView>{posts}</ScrollView>
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
