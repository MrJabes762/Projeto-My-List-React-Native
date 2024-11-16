import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styleBotao = StyleSheet.create ({
    botao:{
        width: 230,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,//arredondamento
        backgroundColor: themes.colors.verdeMaisouMenos,
        borderWidth: 2.5,// borda
        borderColor: 'black',//cor da borda
        shadowColor: "#000",// esquema de sombra do botão 
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    textoBotao: {
        color: 'white',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
});