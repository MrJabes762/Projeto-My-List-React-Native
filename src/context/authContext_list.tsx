import React, { createContext, useContext, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Modalize } from "react-native-modalize";
import { styleModal } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { themes } from "../global/themes";
import { Prioridade } from "../components/Prioridade";
import { DateTimer } from "../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
    const [item, setItem] = useState (0);
    const [taskList, setTaskList] = useState ([]);

    const prioridades = [
        { caption: 'Urgente', color: themes.colors.vermelhoIfba },
        { caption: 'Opcional', color: themes.colors.verdeMaisouMenos }
    ];

    const handlerDateChange = (date) => {
        setDataSeleconada(date);
    };
    const handleTimerChange = (timer) => {
        setTimerSelecionada(timer);
    };

    const salvarItens = async () => {
        if (!titulo || !descricao || !selectPrioriadade) {
            Alert.alert("Atenção", "Preencha todos os campos");
            return;
        }
    
        try {
            const newItem = {
                item: Date.now(),
                titulo: titulo,
                descricao: descricao,
                prioridade: selectPrioriadade,
                timeLimite: new Date(
                    dataSelecionada.getFullYear(),
                    dataSelecionada.getMonth(),
                    dataSelecionada.getDate(), 
                    timerSelecionado.getHours(),
                    timerSelecionado.getMinutes()
                ).toISOString(),
            };
    
            // Recuperar recupera os dados 
            const storageData = await AsyncStorage.getItem('taskList');
            let taskList = [];
    
            // Se houver dados, parse como JSON e garanta que seja um array
            if (storageData) {
                try {
                    taskList = JSON.parse(storageData);
                    if (!Array.isArray(taskList)) {
                        throw new Error("Dados no AsyncStorage não são um array.");
                    }
                } catch (error) {
                    console.error("Erro ao processar os dados salvos:", error);
                    taskList = []; // Se falhar no parse ou não for um array, inicialize como vazio
                }
            }
    
            // Adicione o novo item à lista
            taskList.push(newItem);
    
            // Salve a lista atualizada no AsyncStorage
            await AsyncStorage.setItem('taskList', JSON.stringify(taskList));
    
            Alert.alert("Sucesso", "Tarefa salva com sucesso!");
            setTaskList(taskList);
            limpaCampos();
            fechar()
    
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
            Alert.alert("Erro", "Não foi possível salvar a tarefa.");
        }
    };
    
    const limpaCampos = () =>{
        setTitulo('');
        setDescricao('');
        setItem(0);
        setSelectPrioridade('Urgente');
        setDataSeleconada(new Date ());
        setTimerSelecionada (new Date ())
    }
    const _renderPropriedades = () => {
        return (
            prioridades.map((item, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => {
                        setSelectPrioridade (item.caption);
                    }}
                
                >
                    <Prioridade
                        caption={item.caption}
                        color={item.color}
                        selected = {item.caption == selectPrioriadade}
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
                    <TouchableOpacity onPress={() => salvarItens()}>
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
    console.log(taskList);
    return (// Qual a navegação ou tela vai dentro 
        <AuthContextList.Provider value={{ abrir, taskList }}>
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