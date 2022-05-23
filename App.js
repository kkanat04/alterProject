import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabFooter from './src/Tab/Tab';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <TabFooter />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
