import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { stylePrioridade } from "./style";
import { themes } from "../../global/themes";

type Props ={
    caption: 'string'
    color:'string'
}

export function Prioridade ({...rest}: Props){
    return (
        <TouchableOpacity style = {[stylePrioridade.container, {backgroundColor: rest?.color}]}>
            <Text style = {stylePrioridade.textoBotao}>{rest.caption}</Text>
        </TouchableOpacity>
    );
}