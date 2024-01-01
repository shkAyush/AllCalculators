import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.WHITE,
  },
  homeText: {
    fontFamily: fonts.Montserrat_Bold,
    fontSize: fonts.SIZE_24,
    color: Colors.primary.RED,
  },
  topHeading: {
    fontFamily: fonts.Montserrat_Bold,
    fontSize: fonts.SIZE_24,
    color: Colors.primary.BLACK,
    textAlign: 'center',
    marginTop: 20,
  },
  gstText: {
    fontFamily: fonts.Montserrat_Regular,
    fontSize: fonts.SIZE_18,
    color: Colors.primary.BLACK,
  },
  gstTouch: {
    marginTop: 30,
    marginLeft: 40,
  },
});

export default styles;
