import React,{useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
const Splash = (props) => {
    useEffect(()=>{
        props.navigation
        setTimeout(()=>{
            SplashScreen.hide();
            props.navigation.reset({
                index:0,
                routes:[{name:"Home"}]
            })
        },2000)
    },[])
    return(
        <></>
    );
}
  ;
 
export default Splash;
