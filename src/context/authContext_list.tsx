import React, { createContext, useContext, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from "react-native";
import { Modalize } from "react-native-modalize";
import { styleModal } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { themes } from "../global/themes";
import { Prioridade } from "../components/Prioridade";
import { DateTimer } from "../components/CustomDateTimePicker";


/* Essa const fascilita a exibição do botão de mais para exibir 
o modal independente das telas em execução em vez de criar 
um componente e importar para os ambas as telas e ser menos eficiente
*/
export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {


    const modalizeRef = useRef<Modalize>(null);// Pegando a referencia do Modal 

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tempoLimite, setTempoLimite] = useState('');
    const [selectPrioriadade, setSelectPrioridade] = useState('urgente');
    const [dataSelecionada, setDataSeleconada] = useState(new Date());
    const [timerSelecionado, setTimerSelecionada] = useState(new Date());
    const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
    const [mostrarTimerPicker, setMostrarTimerPicker] = useState(false);

    const prioridades = [
        { caption: 'Urgente', color: themes.colors.vermelhoIfba },
        { caption: 'Opcional', color: themes.colors.verdeMaisouMenos }
    ];

    const handlerDateChange = (date) => {
        setDataSeleconada(date);
    }
    const handleTimerChange = (timer) => {
        setTimerSelecionada(timer);
    }

    const _renderPropriedades = () => {
        return (
            prioridades.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Prioridade
                        caption={item.caption}
                        color={item.color}
                    />
                </TouchableOpacity>
            ))
        );
    }
    const container = () => {
        return (
            // Para evitar bugs no teclado para ambas as plataformas 
            <KeyboardAvoidingView
                style={styleModal.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styleModal.cabecalho}>
                    <TouchableOpacity onPress={fechar}>
                        <MaterialIcons
                            name="close"
                            size={30}
                            color={themes.colors.verdeCLaroIfba}
                        />
                    </TouchableOpacity>
                    <Text style={styleModal.texto}>
                        Criar Tarefa
                    </Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="check"
                            size={30}
                            color={themes.colors.verdeCLaroIfba}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleModal.corpo}>
                    <Input
                        title="Titulo"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <Input
                        value={descricao}
                        onChangeText={setDescricao}
                        title="Descrição"
                        heigh={100}
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity onPress={() => setMostrarDatePicker(true)}>
                            <Input
                                title="Data Limite"
                                value={dataSelecionada.toLocaleDateString()}
                                editable={false}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setMostrarTimerPicker(true)}>
                            <Input
                                title="Hora Limite"
                                value={timerSelecionado.toLocaleTimeString()}
                                editable={false}
                            />
                        </TouchableOpacity>

                        <DateTimer
                            type="date"
                            onDataChanged={handlerDateChange}
                            setMostrar={setMostrarDatePicker}
                            mostrar={mostrarDatePicker}
                        />
                        <DateTimer
                            type="time" 
                            onDataChanged={handleTimerChange}
                            setMostrar={setMostrarTimerPicker}
                            mostrar={mostrarTimerPicker}
                        />

                    </View>
                    <View style={styleModal.containerFlag}>
                        <Text style={styleModal.textoFlag}>
                            Prioridade
                        </Text>
                        <View style={styleModal.prioridades}>
                            {_renderPropriedades()}
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }

    const abrir = () => {
        modalizeRef?.current?.open();// Abertura do modal 
    }
    const fechar = () => {
        modalizeRef?.current?.close();// Fechar Modal
    }
    return (// Qual a navegação ou tela vai dentro 
        <AuthContextList.Provider value={{ abrir }}>
            {props.children}
            <Modalize //A tela que abre por cima 
                ref={modalizeRef}
                childrenStyle={{ height: Dimensions.get("window").height / 1.2 }}// Altura que ele vai pegar da tela
                adjustToContentHeight={true}
                modalStyle={styleModal.modal} // Estilo do conteúdo do modal
            >
                {container()}
            </Modalize>
        </AuthContextList.Provider>
    );
}

export const useAuth = () => useContext(AuthContextList);