import React  from 'react';
import {View} from 'react-native';
import Routes from './navigation/navigationStack';

const App = props => {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};
export default App;
