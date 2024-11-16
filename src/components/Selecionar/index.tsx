import React from "react";
import { View } from 'react-native';
import { styleSelecionar } from "./style";
import { themes } from "../../global/themes";

type Props ={
    color?:'string'
}

export function Selecionar ({...rest}: Props){
    return (
        <View style = {[styleSelecionar.circulo, {borderColor: rest.color?rest.color:themes.colors.black}]}/>
    );
}