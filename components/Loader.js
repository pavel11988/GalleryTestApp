import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator style={styles.loader} size="large" color="#fffff" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 200,
    height: 200,
  },
});

export default Loader;
