import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styleList = StyleSheet.create ({
    Tela:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        position:'relative',
        backgroundColor:themes.colors.verdeCLaroIfba
    },
    cabecalho:{
        width:'100%',
        height:Dimensions.get("window").height/5,
        backgroundColor:themes.colors.verdeEscuroIfba,
        paddingHorizontal:20,
        justifyContent:'center'
    },
    textoCabecalho:{
        fontSize:18,
        color: 'white',
        marginTop: 20
    },
    viewInput:{
        width:'80%'
    },
    lista:{
        marginTop:40,
        paddingHorizontal:10
    },
    card:{
        width: '100%',
        height:65,
        backgroundColor:'white',
        marginTop:10,
        borderRadius:10,
        padding:5,
        justifyContent:'center',
        borderColor:themes.colors.verdeEscuroIfba,
        borderWidth:2
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rowCardEsqueda:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    cardTitulo:{
        width:200,
        fontWeight:'bold',
        fontSize:14,
        color:themes.colors.verdeEscuroIfba
    },
    cardDesc:{
        fontStyle:'italic',
        fontSize:14,
        color:themes.colors.verdeCLaroIfba
    }
});