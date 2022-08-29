import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens:
import GalleryScreen from './screens/gallery/GalleryScreen';
import ImageScreen from './screens/image/ImageScreen';

const GalleryStack = createStackNavigator();

const useRoute = () => {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        options={{headerShown: false}}
        name="Gallery"
        component={GalleryScreen}
      />
      <GalleryStack.Screen
        options={{headerShown: false}}
        name="Image"
        component={ImageScreen}
      />
    </GalleryStack.Navigator>
  );
};

export default useRoute;
