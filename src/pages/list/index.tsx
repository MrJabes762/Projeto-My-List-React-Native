import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { styleList } from "./style";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Selecionar } from "../../components/Selecionar";
import { Prioridade } from "../../components/Prioridade";


type PropCard = {
    id:number,
    titulo:string,
    descricao:string,
    prioridade:'Urgente' | 'Opcional'
}
const data:Array<PropCard> = [
    {
        id:0,
        titulo: "Realizar tarefa de Dados",
        descricao:"Buscar informações em uma API externa e mesclar os dados",
        prioridade: "Opcional"
    },
    {
        id:1,
        titulo: "Construir diagrama de algoritmos ",
        descricao:"Usar o Drawio para confecionar diagramas ",
        prioridade: "Urgente"
    },
    {
        id:2,
        titulo: "Realizar Pull requests no código central",
        descricao:"Avaliar código e mesclar com a branch principal",
        prioridade: "Urgente"
    },
    {
        id:3,
        titulo: "levantar Requisitos dos Softwares",
        descricao:"Entrevista com os clientes para aferição das necessidades",
        prioridade: "Urgente"
    },
    {
        id:4,
        titulo: "Ajuste de Servidor",
        descricao:"Verificar a logica de requisição das informações",
        prioridade: "Opcional"
    },
    {
        id:5,
        titulo: "detalhamento da arquitetura",
        descricao:"Levantar as infos e definir arquitetura",
        prioridade: "Urgente"
    },
    {
        id:6,
        titulo: "Construção do Backend da Aplixação",
        descricao:"Usar Spring Boot ou Quarkus",
        prioridade: "Urgente"
    },
    {
        id:7,
        titulo: "Atualização de Dependencias do projeto",
        descricao:"Colocar versões atuais",
        prioridade: "Urgente"
    },
    {
        id:8,
        titulo: "descrever arquitetura do projeto ",
        descricao:"Aplicar Microserviços para Operações",
        prioridade: "Urgente"
    },
    {
        id:9,
        titulo: "Mantutenção diaria dos servidores",
        descricao:"ajuste de latencia ",
        prioridade: "Opcional"
    },
    {
        id:10,
        titulo: "Verificar a integridade dos dados",
        descricao:"Aplicar normalização de Banco de Dados",
        prioridade: "Urgente"
    }
]

export default function List() {
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
                        color="red"
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
                        IconLeftName="search"
                    />
                </View>
            </View>
            <FlatList
                data={data}
                style= {styleList.lista}
                keyExtractor={(item,index) => item.id.toString()}
                renderItem={({item,index}) => {
                    return (
                        card(item)
                    );
                }}
            />        
        </View>
    );
}