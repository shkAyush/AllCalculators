import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";
import fonts from "../../theme/fonts";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.secondary.LIGHT_BLUE,
    justifyContent:"center",
    alignItems:"center"
  },
  homeText:{
    fontFamily:fonts.Montserrat_Bold,
    fontSize:fonts.SIZE_24,
    color:Colors.primary.RED,
  }

});

export default styles;
