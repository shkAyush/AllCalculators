import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../theme/Colors';
import fonts from '../theme/fonts';


const AppButton = props => (
  <View
    style={{
      width: props.width ? props.width : '100%',
      alignSelf: 'center',
      marginTop: props.marginTop ? props.marginTop : 10,
      marginBottom: props.marginBottom ? props.marginBottom : 20,
      marginVertical: props.marginVertical,
    }}>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginHorizontal: props.marginHorizontal ? props.marginHorizontal : 18,
        borderRadius: 50,
      }}
      onPress={props.onPress}>
      <View
        style={[
          styles.button,
          props.button_style,
          {
            height: props.height ? props.height : 50,
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : Colors.primary.BLACK,
          },
        ]}>
        <Text style={[styles.button_text, props.button_text_style]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 7,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius:50
  },

  button_text: {
    color: Colors.primary.WHITE,
    fontSize: fonts.SIZE_16,
    fontFamily: fonts.Montserrat_Medium,
  },
});

export default AppButton;
