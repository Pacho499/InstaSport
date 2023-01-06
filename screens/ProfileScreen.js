import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper';
import Data from '../data/fake-data';

export default function Profile(props) {
  const {userId} = props.route.params;
  const userPosts = Data.filter((post) => post.userId === userId);
  const userImage = userPosts[0].userImage;
  const userName = userPosts[0].userName;
  const postsImages = userPosts.map((post) => {
    return <Image source={{uri: post.image}} style={styles.image} />;
  });
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={{uri: userImage}}
          blurRadius={10}
          style={styles.imageBackground}
        >
          <Image source={{uri: userImage}} style={styles.userImage} />
        </ImageBackground>
      </View>
      <Text
        style={{
          marginTop: 50,
          fontSize: 20,
          fontWeight: '600',
          alignSelf: 'center',
        }}
      >
        {userName}
      </Text>
      <View style={styles.postContainer}>{postsImages}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 3,
  },
  postContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: 75,
  },
  imageBackground: {
    width: SCREEN_WIDTH,
    height: 100,
    alignItems: 'center',
  },
});
