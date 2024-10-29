import React from "react";
import { createStackNavigator } from "@react-navigation/stack";// Biblioteca responsavel pela navegação entre telas 
import Login from "../pages/login";
import List from "../pages/list";
import { themes } from "../global/themes";
import Botoes from "./botao.routes";

export default function Routes (){

    const Stack = createStackNavigator();// pilha de navegação 

    return (
        <Stack.Navigator
            initialRouteName="Login"// Ponto de partida do App
            screenOptions={{
                headerShown: false,// Tirar o cabeçalho
                cardStyle:{
                    backgroundColor: themes.colors.verdeEscuroIfba// Dundo de toda a Aplicação 
                }
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BotaoRotas"
                component={Botoes}            
            />
        </Stack.Navigator>
    );
}