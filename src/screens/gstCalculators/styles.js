import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.WHITE,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
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
  totalView: {
    borderColor: Colors.primary.BLACK,
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    marginHorizontal: 18,
    justifyContent: 'center',
    paddingLeft: 15,
    marginTop: 20,
  },
  gstAmountLabel: {
    position: 'absolute',
    top: -10,
    backgroundColor: Colors.primary.WHITE,
    left: 30,
    fontFamily: fonts.Montserrat_Bold,
    fontSize: fonts.SIZE_15,
  },
  titleText: {
    fontFamily: fonts.Montserrat_Bold,
    fontSize: fonts.SIZE_20,
    color: Colors.primary.BLACK,
    textAlign: 'center',
    marginTop: 50,
  },
  resultText: {
    fontFamily: fonts.Montserrat_Regular,
    fontSize: fonts.SIZE_14,
    color: Colors.primary.BLACK,
  },
  buttonView: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
