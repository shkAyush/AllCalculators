// FDCalculator.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
} from 'react-native';
import styles from './styles';
import AppInput from '../../component/commonTextInputs';
import AppButton from '../../component/commonButton';
import AppHeader from '../../navigation/appHeader';
import imagePath from '../../theme/imagePath';

const FDCalculator = (props) => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardStatus(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus(0);
    });
    const hideSubscriptionDid = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      hideSubscriptionDid.remove();
    };
  }, []);

  useEffect(() => {
    AppHeader({
      ...props,
      leftIcon: true,
      leftImage: imagePath.arrowRight,
      headerTitle: true,
      Title: 'FD Calculator',
      leftClick: () => {
        props.navigation.goBack();
      },
    });
  }, []);

  const calculateMaturity = () => {
    const principalAmount = parseFloat(principal);
    const rateOfInterest = parseFloat(interestRate);
    const timePeriod = parseFloat(tenure);

    const maturityAmount =
      principalAmount * (1 + (rateOfInterest / 100) * (timePeriod / 12));

    setResult(` ${maturityAmount.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <AppInput
        marginTop={26}
        keyboardType={'numeric'}
        value={principal}
        onChangeText={text => setPrincipal(text)}
        labelText={'Enter your principal Amount'}
      />
      <AppInput
        marginTop={26}
        keyboardType={'numeric'}
        value={interestRate}
        onChangeText={text => setInterestRate(text)}
        labelText={'Enter your interest Rate (%)'}
      />
      <AppInput
        marginTop={26}
        keyboardType={'numeric'}
        value={tenure}
        onChangeText={text => setTenure(text)}
        labelText={'Enter your tenure (months)'}
      />

      {result ? (
        <View style={styles.resultView}>
          <Text style={styles.resultText} numberOfLines={1}>
            {result}
          </Text>
          <Text style={styles.gstAmountLabel}>Maturity Amount</Text>
        </View>
      ) : null}

      {!keyboardStatus ? (
        <View style={styles.buttonView}>
          <AppButton title={'Calculate FD'} onPress={calculateMaturity} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default FDCalculator;
