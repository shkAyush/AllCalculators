import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import styles from './styles';
import AppButton from '../../component/commonButton';
import AppInput from '../../component/commonTextInputs';
import KeyboardScroll from '../../component/keyboardScroll';

const GstCalculator = props => {
  const [originalAmount, setOriginalAmount] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [gstAmount, setGstAmount] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const amountRef = useRef(null);

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

  const calculateGst = () => {
    if (originalAmount && gstRate) {
      const amount = parseFloat(originalAmount);
      const rate = parseFloat(gstRate);

      const gst = (amount * rate) / 100;
      const total = amount + gst;

      setGstAmount(gst.toFixed(2));
      setTotalAmount(total.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardScroll>
        <Text style={styles.titleText}>GST Calculator</Text>
        <AppInput
          marginTop={26}
          placeholder={'Enter Amount:'}
          keyboardType={'numeric'}
          value={originalAmount}
          onChangeText={text => setOriginalAmount(text)}
          setFocus={() => {
            amountRef.current?.focus();
          }}
          labelText={'Amount'}
        />

        <AppInput
          marginTop={26}
          placeholder={'Enter GST rate:'}
          keyboardType={'numeric'}
          value={gstRate}
          onChangeText={text => setGstRate(text)}
          getFocus={amountRef}
          returnKeyType={'done'}
          labelText={'GST Rate (%)'}
        />

        <View style={styles.resultView}>
          <Text style={styles.resultText} numberOfLines={1}>
            {gstAmount}
          </Text>
          <Text style={styles.gstAmountLabel}>GST Amount</Text>
        </View>

        <View style={styles.totalView}>
          <Text style={styles.resultText} numberOfLines={1}>
            {totalAmount}
          </Text>
          <Text style={styles.gstAmountLabel}>Total Amount</Text>
        </View>
      </KeyboardScroll>
      {!keyboardStatus ? (
        <View style={styles.buttonView}>
          <AppButton title={'GST'} onPress={() => calculateGst()} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default GstCalculator;
