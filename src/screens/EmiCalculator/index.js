import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text, Keyboard} from 'react-native';
import AppInput from '../../component/commonTextInputs';
import styles from './styles';
import AppButton from '../../component/commonButton';
import AppHeader from '../../navigation/appHeader';
import imagePath from '../../theme/imagePath';

const calculateEMI = (principal, rate, time) => {
  const r = rate / (12 * 100);
  const n = time * 12;
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalAmount = emi * n;
  const totalInterest = totalAmount - principal;
  return {
    emi: emi.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
};

const EMICalculator = (props) => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);
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
      Title: 'EMI Calculator',
      leftClick: () => {
        props.navigation.goBack();
      },
    });
  }, []);

  const handleCalculate = () => {
    if (principal && rate && time) {
      const calculationResult = calculateEMI(
        parseFloat(principal),
        parseFloat(rate),
        parseInt(time),
      );
      setResult(calculationResult);
    }
  };

  return (
    <View style={styles.container}>
      <AppInput
        marginTop={26}
        keyboardType={'numeric'}
        value={principal}
        onChangeText={text => setPrincipal(text)}
        labelText={'Loan Amount'}
      />
      <AppInput
        marginTop={15}
        keyboardType={'numeric'}
        value={rate}
        onChangeText={text => setRate(text)}
        labelText={'Annual interest rate in %'}
      />
      <AppInput
        marginTop={15}
        keyboardType={'numeric'}
        value={time}
        onChangeText={text => setTime(text)}
        labelText={'Loan term years'}
      />
      {result && (
        <View>
          <View style={styles.resultView}>
            <Text style={styles.resultText} numberOfLines={1}>
              {result.emi}
            </Text>
            <Text style={styles.gstAmountLabel}>EMI</Text>
          </View>
          <View style={styles.resultView}>
            <Text style={styles.resultText} numberOfLines={1}>
              {result.totalInterest}
            </Text>
            <Text style={styles.gstAmountLabel}>Total Interest</Text>
          </View>
          <View style={styles.resultView}>
            <Text style={styles.resultText} numberOfLines={1}>
              {result.totalAmount}
            </Text>
            <Text style={styles.gstAmountLabel}>Total Amount</Text>
          </View>
        </View>
        
      )}
        {!keyboardStatus ? (
        <View style={styles.buttonView}>
          <AppButton title={'Calculate EMI'}  onPress={handleCalculate} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default EMICalculator;
