import { StyleSheet, View } from 'react-native';
import SavedPost from '../components/SavedPost'
import {useDispatch, useSelector} from 'react-redux'
import {removePost} from '../store/action/removePost';
import React from 'react'

export default function SavedPostScreen() {
  const dispatch = useDispatch();
  const savedPostList = useSelector(state => {
    const postArray = [];
    for (id in state.savedPost.savedItems){
      postArray.push(state.savedPost.savedItems[id])
    }
    return postArray
  })
  const myPost = savedPostList.map(post => {
    return <SavedPost onRemovePost={() => dispatch(removePost(post.id))} key={post.id} userName={post.userName} image={post.postImage} />
  })
  return (
    <View style={styles.container}>
      {myPost}
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