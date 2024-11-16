import React from "react";
import { StyleSheet } from "react-native";
import { themes } from "../global/themes";

export const styleModal = StyleSheet.create ({
    modal:{
        backgroundColor: themes.colors.verdeEscuroIfba
    },
    container:{
        width: '100%',
        alignItems: 'center',
    },
    cabecalho:{
        width: '100%',
        height:40,
        paddingHorizontal:40,
        flexDirection: 'row',// ajustados na horizontal
        justifyContent: 'space-between',// deixa os iteis destribuidos no espaço
        alignItems:'center',
        marginTop:20
    },
    texto:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold'
    },
    corpo:{
        width:'100%',
        paddingHorizontal:20
    },
    containerFlag:{
        width:'100%',
        padding:10
    },
    textoFlag:{
        marginVertical:10,
        textTransform: 'uppercase',
        color: themes.colors.verdeCLaroIfba,
        fontWeight:'bold'
    },
    prioridades:{
        marginLeft:10,
        flexDirection:'row'
    },
});