import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styleDateTimer = StyleSheet.create ({
    modalOverlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themes.colors.transparente
    },
    container:{
        width:80,
        padding:10,
        backgroundColor:'#fff',
        elevation:5,
        alignItems:'center'
    },
    dataText: {
        marginTop:20,
        fontSize:10,
        textAlign:'center'
    }
});