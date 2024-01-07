import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary.MAGNOLIA,
  },
  buttonView: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  resultView: {
    borderColor: Colors.primary.BLACK,
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    marginHorizontal: 18,
    justifyContent: 'center',
    paddingLeft: 15,
    marginTop: 40,
  },
  resultText: {
    fontFamily: fonts.Montserrat_Regular,
    fontSize: fonts.SIZE_14,
    color: Colors.primary.BLACK,
  },
  gstAmountLabel: {
    position: 'absolute',
    top: -10,
    backgroundColor: Colors.primary.WHITE,
    left: 30,
    fontFamily: fonts.Montserrat_Bold,
    fontSize: fonts.SIZE_15,
  },
});

export default styles;
