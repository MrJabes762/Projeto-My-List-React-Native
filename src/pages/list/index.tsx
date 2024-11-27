import React, { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { styleList } from "./style";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Selecionar } from "../../components/Selecionar";
import { Prioridade } from "../../components/Prioridade";
import { AuthContextList } from "../../context/authContext_list";


export default function List() {
    /*Essa const que utiliza o AuthContextType
    vai recuperar do AuthContextList apenas a taskList
    que é a variavel da qual deve ser comun aos 2 para pegar os dados criados no 
    Async Storage e trazer para listagem
    */
    const {taskList} = useContext<AuthContextType>(AuthContextList); 
    const card = (item:PropCard) =>{
        return (
            <TouchableOpacity style = {styleList.card}>
                <View style= {styleList.rowCard}>
                    <View style = {styleList.rowCardEsqueda}>
                        <Selecionar/>
                            <View>
                                <Text 
                                    style = {styleList.cardTitulo} 
                                    numberOfLines= {1} // exibir a info em uma unica linha 
                                    ellipsizeMode = {'tail'}//para adicionar os 3 pontos 
                                    >{item.titulo}
                                </Text>
                                <Text 
                                    style = {styleList.cardDesc}
                                    numberOfLines= {1} 
                                    ellipsizeMode = {'tail'}
                                    >{item.descricao}</Text>
                            </View>
                    </View>
                    <Prioridade
                        color='red'
                        caption={item.prioridade}
                    />
                </View>
            </TouchableOpacity>
        );
                        
    }
    return (
        <View style = {styleList.Tela}>
            <View style = {styleList.cabecalho}>
                <Text style = {styleList.textoCabecalho}>
                    Bom dia, Jabes
                </Text>
                <View style = {styleList.viewInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName='search'
                    />
                </View>
            </View>
            <FlatList
                data={taskList}
                style= {styleList.lista}
                keyExtractor={(item,index) => item.item.toString()}
                renderItem={({item,index}) => {
                    return (
                        card(item)
                    );
                }}
            />        
        </View>
    );
}