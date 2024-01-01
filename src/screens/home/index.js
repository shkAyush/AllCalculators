import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AppInput from '../../component/commonTextInputs';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>All Calculators</Text>
      <TouchableOpacity
        style={styles.gstTouch}
        onPress={() => {
          props.navigation.navigate('GstCalculator');
        }}
        activeOpacity={0.8}>
        <Text style={styles.gstText}>GST Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
