import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// redux
import {Provider} from 'react-redux';
import store from './redux/store';

// route
import useRoute from './router';

const App = () => {
  const routing = useRoute();
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;
