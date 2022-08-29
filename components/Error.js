import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// components (svg)
import Warning from '../assets/svgs/warning.svg';

const ErrorBoundary = () => (
  <View style={styles.errorContainer}>
    <Warning fill={'#dc143c'} />
    <Text style={styles.errorTitle}>Error</Text>
    <Text style={styles.errorText}>
      The server is not responding. Try later.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTitle: {
    fontSize: 30,
    color: '#dc143c',
  },
  errorText: {
    fontSize: 20,
    color: '#ffebcd',
  },
});

export default ErrorBoundary;
