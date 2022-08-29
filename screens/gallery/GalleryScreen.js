import React, {useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

// redux:
import {useDispatch, useSelector} from 'react-redux';
import {galleryOperations} from '../../redux/gallery';

// components:
import ErrorBoundary from '../../components/Error';
import ImagesList from '../../components/ImagesList';
import Loader from '../../components/Loader';
import SearchInput from '../../components/SearchInput';

const GalleryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.gallery.images);
  const loading = useSelector(state => state.gallery.status);
  const error = useSelector(state => state.gallery.error);

  useEffect(() => {}, [loading, error]);

  useEffect(() => {
    if (images.length === 0) {
      dispatch(galleryOperations.getRandomImages());
    }
  }, [dispatch, images]);

  const LOADING = loading === 'pending';
  const ERROR = error === true;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ImageBackground
          style={styles.wallpaper}
          source={require('../../assets/images/wallpaper_bg2.jpg')}
          blurRadius={2}>
          <SearchInput />
          <ImagesList navigation={navigation} images={images} />
          {LOADING && <Loader />}
          {ERROR && <ErrorBoundary />}
        </ImageBackground>
      </TouchableWithoutFeedback>
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
  },
});

export default GalleryScreen;
