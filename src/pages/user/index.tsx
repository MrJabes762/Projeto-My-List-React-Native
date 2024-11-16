import React from "react";
import { Text, View } from "react-native"
import { styleUser } from "./style";

export default function User (){
    return (
        <View style = {styleUser.Tela}>
            <Text>
                Olá Mundo User
            </Text>
        </View>
    );
} 