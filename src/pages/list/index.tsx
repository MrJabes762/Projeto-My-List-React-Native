import React, { useContext, useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { styleList } from "./style";
import { Input } from "../../components/Input";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Selecionar } from "../../components/Selecionar";
import { Prioridade } from "../../components/Prioridade";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBr } from "../../global/functions";
import { Directions, Swipeable } from "react-native-gesture-handler";
import { themes } from "../../global/themes";


export default function List() {
    /*Essa const que utiliza o AuthContextType
    vai recuperar do AuthContextList apenas a taskList
    que é a variavel da qual deve ser comun aos 2 para pegar os dados criados no 
    Async Storage e trazer para listagem
    */
    const { taskList, handleDelete, handleEditar,filtrar } = useContext<AuthContextType>(AuthContextList);
    const swipeableRefs = useRef([]);

    const deletar = () => {
        return (<View
            style={styleList.botaoDeletar}
        >
            <AntDesign
                name="delete"
                size={20}
                color={'white'}
            />
        </View>);
    }
    const editar = () => {
        return (<View
            style={styleList.botaoEditar}
        >
            <AntDesign
                name="edit"
                size={20}
                color={'white'}
            />
        </View>);
    }
    const handleSwipeableOpem = (directions: 'right' | 'left', item, index) => {
        if (directions === 'right') {
            handleDelete(item);
        } else {
            handleEditar(item);
        }
        swipeableRefs.current[index]?.close();
    };

    const card = (item: PropCard, index) => {

        return (
            <Swipeable
                ref={(ref) => swipeableRefs.current[index] = ref}
                key={index}
                renderRightActions={deletar}
                renderLeftActions={editar}
                onSwipeableOpen={(directions) => handleSwipeableOpem(directions, item, index)}
            >
                <View style={styleList.card}>
                    <View style={styleList.rowCard}>
                        <View style={styleList.rowCardEsqueda}>
                            <Selecionar />
                            <View>
                                <Text
                                    style={styleList.cardTitulo}
                                    numberOfLines={1} // exibir a info em uma unica linha 
                                    ellipsizeMode={'tail'}//para adicionar os 3 pontos 
                                >{item.titulo}
                                </Text>
                                <Text
                                    style={styleList.cardDesc}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                >{item.descricao}
                                </Text>
                                <Text style={styleList.cardData}>
                                    Até {formatDateToBr(item.tempoLimite)}
                                </Text>
                            </View>
                        </View>
                        <Prioridade
                            color='red'
                            caption={item.prioridade}
                        />
                    </View>
                </View>
            </Swipeable>
        );

    }
    return (
        <View style={styleList.Tela}>
            <View style={styleList.cabecalho}>
                <Text style={styleList.textoCabecalho}>
                    Bom dia, Jabes
                </Text>
                <View style={styleList.viewInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName='search'
                        onChangeText={(t) => filtrar(t)}
                    />
                </View>
            </View>
            <FlatList
                data={taskList}
                style={styleList.lista}
                keyExtractor={(item) => item.item.toString()}
                renderItem={({ item, index }) => {
                    return (
                        card(item, index)
                    );
                }}
            />
        </View>
    );
}