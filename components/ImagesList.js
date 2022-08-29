import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// components (svg)
import UserIcon from '../assets/svgs/user.svg';

const ImagesList = ({navigation, images}) => {
  return (
    <FlatList
      alignItems={'center'}
      data={images}
      renderItem={({item}) => (
        <View style={styles.imgContainer}>
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Image', item)}>
            <Image style={styles.image} source={{uri: item.urls.small}} />
          </TouchableOpacity>

          <Text style={styles.username}>
            <UserIcon width={12} height={12} fill={'#90ee90'} />
            Photo by @{item.user.username}
          </Text>
        </View>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wallpaper: {
    flex: 1,
    resizeMode: 'contain',
  },

  imgContainer: {
    width: 160,
    height: 160,
    marginVertical: 30,
    marginHorizontal: 10,
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },
  username: {
    maxWidth: 160,
    fontSize: 12,
    overflow: 'hidden',
    color: '#ffffe0',
  },
});

export default ImagesList;
