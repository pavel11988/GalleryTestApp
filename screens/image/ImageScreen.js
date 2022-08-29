import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// components:
import Loader from '../../components/Loader';
import Back from '../../assets/svgs/back.svg';

const ImageScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.wallpaper}
        source={{uri: route.params.urls.full}}
        blurRadius={5}>
        {loading && <Loader />}
        <Image
          style={styles.image}
          source={{uri: route.params.urls.full}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Gallery')}>
          <Back width={50} height={50} fill={'#20b2aa'} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wallpaper: {
    flex: 1,
    resizeMode: 'contain',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 20,
  },
});

export default ImageScreen;
