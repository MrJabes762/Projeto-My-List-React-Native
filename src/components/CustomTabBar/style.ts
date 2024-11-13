import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styleTabBar = StyleSheet.create({
    tabBar: {
        backgroundColor: themes.colors.verdeEscuroIfba,
        height: 80,
        flexDirection: 'row',// ajustados na horizontal
        justifyContent: 'space-around',// deixa os iteis destribuidos no espaço
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoCentro: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        top: -30,
        backgroundColor: themes.colors.verdeMaisouMenos
    }
});