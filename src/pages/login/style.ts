import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        position:'relative',
        justifyContent: 'center',
        backgroundColor: themes.colors.verdeEscuroIfba
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        marginHorizontal: 37,
        alignItems: 'center'
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageLogo: {
        height: '60%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWelcome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
        textTransform: 'uppercase'
    },
    textoFim:{
        color:themes.colors.verdeCLaroIfba,
        fontSize:16,
        marginBottom:20
    },
    textoFimCreate:{
        fontWeight:'bold',
        color:themes.colors.verdeMaisouMenos
    }
});