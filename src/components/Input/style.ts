import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const stylesInput = StyleSheet.create ({
    caixaInput: {
        width: Dimensions.get('window').width * 0.9,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 15,
        borderColor: themes.colors.black,
        borderWidth: 3,
        borderRadius: 30,
        color: themes.colors.black,
        opacity: 0.6,
        flexDirection: 'row'
    },
    getInput: {
        width: '87%',
        height: '100%',
        marginLeft: 15,
    },
    textInputs: {
        color: themes.colors.verdeCLaroIfba,
        marginVertical: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    Icon:{
        width:'100%',
    },
    Botao:{
        width:'10%'
    }
});