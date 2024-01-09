import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

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
      <TouchableOpacity
        style={styles.gstTouch}
        onPress={() => {
          props.navigation.navigate('AgeCalculator');
        }}
        activeOpacity={0.8}>
        <Text style={styles.gstText}>AGE Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gstTouch}
        onPress={() => {
          props.navigation.navigate('EMICalculator');
        }}
        activeOpacity={0.8}>
        <Text style={styles.gstText}>EMI Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gstTouch}
        onPress={() => {
          props.navigation.navigate('FDCalculator');
        }}
        activeOpacity={0.8}>
        <Text style={styles.gstText}>FD Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
