import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const stylePrioridade = StyleSheet.create ({
    container:{
        width:70,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themes.colors.vermelhoIfba,
        borderRadius:10,
        marginHorizontal:3
    },
    textoBotao:{
        color:'white'
    }
});