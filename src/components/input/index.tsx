import React, { forwardRef, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";

import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons"

import { stylesInput } from "./style";
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;
// Atribui as propriedades de um input normal para o componente criado
// A Interrogação indica um atributo / propriedade não Obrigatório(a).
type Propiedades = TextInputProps & {
    IconLeft?: IconComponent,// Propedades que recebem Icones / imagens 
    IconRight?: IconComponent,
    IconLeftName?: string,//Propriedades que recebe um texto / cadeia de caracteres 
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,// Propriedades que recebe uma função 
    onIconRightPress?: () => void
}
// No input receberemos as propriedades de um text imput 
export const Input = forwardRef((Propiedades: Propiedades, ref: LegacyRef<TextInput> | null) => {// exportação do componente 
    // Desestruturação das propriedades
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, ...rest } = Propiedades;
    
    const calcularTamanhoDaLargura = () => {
        if(IconLeft && IconRight){
            return '80%';
        }else if (IconLeft || IconRight){
            return '90%';
        }else{
            return '100%';
        }
    }
    
    const calcularTamanhoDoEspacamentoEsquerdo = () => {
        if(IconLeft && IconRight){
            return 8;
        }else if (IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }
    }

    return (
        //essa anotação <> </> indica um fragmento de código... usado quando se deve retornar varios elementos que não sejam apenas view
        <>
            <Text style={stylesInput.textInputs}>{title}</Text>
            <View style={[stylesInput.caixaInput, {paddingLeft: calcularTamanhoDoEspacamentoEsquerdo()}]}>
                {IconLeft && IconLeftName && (// Se existe os elementos mostre 
                    <TouchableOpacity onPress={onIconLeftPress} style = {stylesInput.Botao}>
                        <IconLeft 
                            name = {IconLeftName as any} 
                            size = {20}
                            color = {themes.colors.black}
                            style = {stylesInput.Icon}
                        />
                    </TouchableOpacity>
                )} 
                <TextInput
                    style={[stylesInput.getInput, {width: calcularTamanhoDaLargura()}]}// desestruturação do estilo para passar a largura 
                    {...rest}// Indica que o restante das propriedades recebidas no parametro serão atribuidas ao input
                />
                {IconRight && IconRightName && (// Se existe os elementos mostre 
                    <TouchableOpacity onPress={onIconRightPress} style = {stylesInput.Botao}>
                        <IconRight
                            name = {IconRightName as any} 
                            size = {20}
                            color = {themes.colors.black}
                            style = {stylesInput.Icon}
                        />
                    </TouchableOpacity>
                )} 
            </View>
        </>
    )
});