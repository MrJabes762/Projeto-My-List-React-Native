
import { styleBotao } from "./style";
import { themes } from "../../global/themes";
import React, { forwardRef } from "react";
import {Text, ActivityIndicator, TouchableHighlightProps, TouchableOpacity } from "react-native"

type Propiedades = TouchableHighlightProps & {
    texto: string
    loading?: boolean
    onBotaoPressionado?: () => void
}

export function Botao (Propedades: Propiedades){
    const {texto,loading, onBotaoPressionado} = Propedades;
    return (
        <TouchableOpacity 
            style = {styleBotao.botao}
            onPress={onBotaoPressionado}
            activeOpacity={0.6}
        >
            {loading?
                <ActivityIndicator
                    color={'#FFFF'} 
                    size={'small'}
                />
                :
                <Text style = {styleBotao.textoBotao}>{texto}</Text>}
        </TouchableOpacity>
    );
}