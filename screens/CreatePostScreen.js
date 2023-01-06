import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, KeyboardAvoidingView, ScrollView} from 'react-native';
import {isIos} from  '../utils/helper'
import axios from 'axios';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitData = async () => {
    const url = 'https://instasport-d9397-default-rtdb.firebaseio.com/posts.json';
    const data = await axios.post(url, {
      title,
      image,
      description,
      id: 10,
      userId : 'u1',
      userName: 'Billy'
    });
    setTitle(''),
    setImage(''),
    setDescription('')
  };
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Titolo del post</Text>
      <TextInput
        style={styles.input}
        placeholder='Scrivi il titolo'
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Text style={styles.title}>Immagine del post</Text>
      <TextInput
        style={styles.input}
        placeholder="Scrivi l' URL"
        value={image}
        onChangeText={(value) => setImage(value)}
      />
      <Text style={styles.title}>Descrizione del post</Text>
      <TextInput
        style={styles.input}
        placeholder='Scrivi la descrizione'
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <Button title='invia' style={{marginTop: 20}} onPress={onSubmitData} />
    </ScrollView>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae8e8',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    width: '90%',
    marginVertical: 10,
    paddingLeft: 5,
    paddingBottom: 5,
  },
});
