import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, Keyboard} from 'react-native';
import AppInput from '../../component/commonTextInputs';
import AppButton from '../../component/commonButton';
import styles from './styles';
import AppHeader from '../../navigation/appHeader';
import imagePath from '../../theme/imagePath';

const AgeCalculator = (props) => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    AppHeader({
      ...props,
      leftIcon: true,
      leftImage: imagePath.arrowRight,
      headerTitle: true,
      Title: 'AGE Calculator',
      leftClick: () => {
        props.navigation.goBack();
      },
    });
  }, []);

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

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - parseInt(birthYear);
    setAge(calculatedAge.toString());
  };

  return (
    <View style={styles.container}>
      <AppInput
        marginTop={26}
        keyboardType={'numeric'}
        value={birthYear}
        onChangeText={text => setBirthYear(text)}
        returnKeyType={'done'}
        labelText={'Enter your birthYear'}
      />
      <View style={styles.resultView}>
        <Text style={styles.resultText} numberOfLines={1}>
          {age}
        </Text>
        <Text style={styles.gstAmountLabel}>Your Age</Text>
      </View>
      {!keyboardStatus ? (
        <View style={styles.buttonView}>
          <AppButton title={'Calculate Age'} onPress={calculateAge} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AgeCalculator;
