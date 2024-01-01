import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import fonts from '../theme/fonts';
import Colors from '../theme/Colors';
import imagePath from '../theme/imagePath';

const AppInput = props => {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  return (
    <View>
      {props.labelText ? (
        <Text
          style={[
            styles.textLabel,
            {marginTop: props.marginTop, marginBottom: props.marginBottom},
          ]}>
          {props.labelText}
        </Text>
      ) : null}
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          marginHorizontal: props.marginHorizontal
            ? props.marginHorizontal
            : 20,
          height: props.height ? props.height : 42,
          flexDirection: 'row',
        }}>
        {props.leftIcon ? (
          <Image
            source={props.leftIcon}
            style={{
              height: 15,
              width: 19,
              resizeMode: 'contain',
              marginLeft: 8,
            }}
          />
        ) : null}

        {props.country_code && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.click_code()}
            hitSlop={{top: 8, bottom: 8}}
            style={styles.view_code}>
            <Text style={styles.text_code}>{props.country_text}</Text>
            <Image
              source={imagePath.down}
              resizeMode="contain"
              style={styles.img_down}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={{
            fontFamily: props.fontFamily
              ? props.fontFamily
              : fonts.Montserrat_Medium,
            flex: 1,
            fontSize: fonts.SIZE_16,
            color: props.colorText ? props.colorText : Colors.primary.BLACK,
          }}
          onFocus={() => setTextInputFocused(true)}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={
            props.placeholderTextColor
              ? props.placeholderTextColor
              : Colors.secondary.DAVY_GREY
          }
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          blurOnSubmit={props.blurOnSubmit}
          keyboardType={props.keyboardType || 'default'}
          returnKeyType={props.returnKeyType}
          underlineColorAndroid="transparent"
          autoFocus={props.autoFocus}
          maxLength={props.maxLength}
          multiline={props.multiline}
          ref={props.getFocus}
          onSubmitEditing={props.setFocus}
          editable={props.editable}
          onBlur={() => setTextInputFocused(false)}
          autoCapitalize={props.autoCapitalize}
        />
        {props.rightIcon ? (
          <TouchableOpacity
            onPress={() => props.onPressEye()}
            hitSlop={{right: 20, left: 20, top: 10, bottom: 10}}
            style={{justifyContent: 'center', marginRight: 5}}>
            <Image
              source={props.rightIcon}
              style={{
                height: props?.imageHeight ? props?.imageHeight : 23,
                width: props?.imageWidth ? props?.imageWidth : 23,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View
        style={{
          backgroundColor: Colors.primary.BLACK,
          height: 1,
          marginHorizontal: props.marginHorizontal
            ? props.marginHorizontal
            : 20,
          marginBottom: props.marginBottom ? props.marginBottom : 10,
        }}
      />
      {props.isErrorMsg ? (
        <Text
          style={[
            styles.error,
            {marginHorizontal: props.errorMargin ? props.errorMargin : 40},
          ]}>
          {props.isErrorMsg}
        </Text>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: fonts.Urbanist_Regular,
    fontSize: fonts.SIZE_17,
    color: '#E01E61',
    marginHorizontal: 32,
    bottom: 2,
  },
  text_code: {
    fontFamily: fonts.Urbanist_Regular,
    fontSize: fonts.SIZE_16,
    color: Colors.primary.BLACK,
    marginLeft: 5,
  },
  view_bar: {
    height: 20,
    width: 2,
    backgroundColor: Colors.primary.GRAYISH,
  },
  view_code: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img_down: {
    height: 15,
    width: 13,
  },
  textLabel: {
    fontFamily: fonts.Montserrat_Regular,
    fontSize: fonts.SIZE_14,
    color: Colors.primary.BLACK,
    marginLeft: 20,
  },
});

export default AppInput;
