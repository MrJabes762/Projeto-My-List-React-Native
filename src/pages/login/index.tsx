import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native"
import { style } from "./style";
import Logo from "../../assets/logoifba.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons"
import { Input } from "../../components/input";
import { Botao } from "../../components/button";

export default function Login (){
    // primeiro parametro é o valor da variavel (Get) e o segundo é a atribuiçao do valor (Set)
    
    const [email,setEmail] = useState ("");
    const [senha,setSenha] = useState ("");
    const [mostrarSenha,setMostrarSenha] = useState (true);
    const [carregando,setCarregando] = useState (false);

    // Função para verificar os dados do login 

    async function getLogin (){
        try {
            setCarregando(true);
            if (!email || !senha){
                return Alert.alert("Atenção", "Informe os campos Obrigatórios !");
            }
            setTimeout(() => {
                Alert.alert("Logado com sucesso");
                setCarregando(false);
            },3000);
        } catch (error) {
            console.log (error);
        }
    }
    return (
        <View style = {style.container}>
            <View style = {style.boxTop}>
                <Image 
                    source={Logo}
                    style = {style.imageLogo}
                    resizeMode="contain"
                />
                <Text style = {style.textWelcome}>Bem Vindo</Text>
            </View>
            <View style= {style.boxMid}>
                <Input
                    value = {email}
                    onChangeText = {setEmail}
                    title = "Insira Seu email"
                    IconRightName = "email"
                    IconRight = {MaterialIcons}
                />
                <Input
                    value = {senha}
                    onChangeText = {setSenha}
                    title = "Insira sua Senha"
                    IconRightName = {mostrarSenha?"eye-closed":"eye"}
                    IconRight = {Octicons}
                    secureTextEntry = {mostrarSenha}
                    onIconRightPress= { () => setMostrarSenha(!mostrarSenha)}
                />
            </View>
            <View style= {style.boxBottom}>
                <Botao
                    texto = "Entrar"
                    onBotaoPressionado= {getLogin}
                    loading = {carregando}
                />
            </View>
            <Text style = {style.textoFim}><Text style = {style.textoFimCreate}>Não possui conta? Crie agora </Text></Text>
        </View>
    )
}