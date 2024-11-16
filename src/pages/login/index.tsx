import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native"
import { style } from "./style";
import Logo from "../../assets/logoifba.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons"
import { Input } from "../../components/Input";
import { Botao } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native"// Bibioteca para realizar a navegação entre as paginas 

export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();// navegador para outras telas 
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
                throw new Error();
            }else{
                setTimeout(() => {
                    Alert.alert("Logado com sucesso");
                    navigation.reset({routes:[{name:"BotaoRotas"}]});// acessa a segunda tela com as outras coisas
                    setCarregando(false);
                },3000);
            }
        } catch (error) {
            Alert.alert ("Atenção", "Informe os campos Obrigatórios !");
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