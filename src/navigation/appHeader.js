import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {useSelector} from 'react-redux';
import fonts from '../theme/fonts';
import Colors from '../theme/Colors';

const AppHeader = props => {
  return props.navigation.setOptions({
    headerLeft: () => (
      <View style={styles.header_view}>
        {props.leftIcon ? (
          <>
            <TouchableOpacity
              activeOpacity={0.6}
              hitSlop={styles.hit_style}
              style={{}}
              onPress={() => props.leftClick()}>
              <Image
                resizeMode={props.resizeMode ? props.resizeMode : 'contain'}
                source={props?.leftImage}
                style={{
                  borderRadius: props.borderLeftRadius
                    ? props.borderLeftRadius
                    : 0,
                  height: props.heightLeftImg ? props.heightLeftImg : 40,
                  width: props.widthLeftImg ? props.widthLeftImg : 40,
                  borderRight: props.borderRight ? props.borderRight : 100,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    ),

    headerTitle: () => (
      <View
        style={[
          styles.title,
          {
            marginLeft: props.marginLeftTitle,
          },
        ]}>
        {props.headerTitle ? (
          <Text
            numberOfLines={1}
            style={{
              fontSize: props.titleSize ? props.titleSize : fonts.SIZE_22,
              fontFamily: props.fontFamily
                ? props?.fontFamily
                : fonts.Montserrat_SemiBold,
              color: props.titleColor
                ? props.titleColor
                : Colors.secondary.NIGHT,
            }}>
            {props.Title}
          </Text>
        ) : null}
        {props.headerTitleImage ? (
          <Image
            resizeMode={'contain'}
            source={props.titleImage}
            style={{
              height: props.heightShareImg ? props.heightShareImg : 42,
              width: props.widthShareImg ? props.widthShareImg : 142,
              marginHorizontal: props.marginHorizontalShareImg
                ? props.marginHorizontalShareImg
                : 0,
            }}
          />
        ) : null}
      </View>
    ),

    headerRight: () => (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.shareIcon ? (
          <TouchableOpacity
            hitSlop={{left: 10, bottom: 5, top: 5, right: 5}}
            activeOpacity={0.6}
            onPress={() => props.shareClick()}
            style={styles.head_rightOne}>
            <Image
              resizeMode={'contain'}
              source={props.share}
              style={{
                height: props.heightShareImg ? props.heightShareImg : 15.68,
                width: props.widthShareImg ? props.widthShareImg : 15.68,
                marginHorizontal: props.marginHorizontalShareImg
                  ? props.marginHorizontalShareImg
                  : 0,
              }}
            />
          </TouchableOpacity>
        ) : null}

        {props.notificationIcon ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.notificationClick()}
            hitSlop={{left: 5, bottom: 5, top: 5, right: 5}}>
            {props?.filterApply ? (
              <View
                style={{
                  backgroundColor: '#FC883C',
                  height: 10,
                  width: 10,
                  borderRadius: 10 / 2,
                  position: 'absolute',
                  right: 20,
                  top: -3,
                }}
              />
            ) : (
              <View />
            )}

            <Image
              resizeMode={'contain'}
              source={props.notification}
              style={{
                height: props.heightRightImg ? props.heightRightImg : 20,
                width: props.widthRightImg ? props.widthRightImg : 20,
                marginRight: props.marginRight ? props.marginRight : 20,
              }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    ),

    headerStyle: {
      height: Platform.OS == 'ios' ? 120 : 100,
      backgroundColor: props.headerBackgroundColor
        ? props.headerBackgroundColor
        : Colors.secondary.MAGNOLIA,
      elevation: 0,
      shadowOpacity: 0,
    },
  });
};

export default AppHeader;

const styles = StyleSheet.create({
  header_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  hit_style: {top: 20, left: 20, right: 20, bottom: 20},
  title: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head_rightOne: {
    marginRight: 15,
  },
  userName: {
    color: Colors.primary.WHITE,
    fontSize: fonts.SIZE_16,
    fontFamily: fonts.Montserrat_SemiBold,
    marginLeft: 15,
  },
  skip_text: {
    fontFamily: fonts.Urbanist_Regular,
    fontSize: fonts.SIZE_16,
    color: Colors.primary.BLACK,
    marginRight: 20,
  },
  skip_right: {
    marginRight: 25,
  },
});
