import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { stylePrioridade } from "./style";
import { themes } from "../../global/themes";

type Props ={
    caption: 'string'
    color:'string'
    selected?: boolean
}

export function Prioridade ({...rest}: Props){
    return (
        <View
            style = {[stylePrioridade.container, {backgroundColor: rest?.color},
            rest?.selected && {borderWidth:2}
        ]}>
            <Text style = {stylePrioridade.textoBotao}>{rest.caption}</Text>
        </View>
    );
}