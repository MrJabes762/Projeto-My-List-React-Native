import React, { createContext, useContext, useRef } from "react";
import { Alert, Dimensions,Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { styleModal } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { themes } from "../global/themes";
import { Prioridade } from "../components/Prioridade";
import { style } from "../pages/login/style";


/* Essa const fascilita a exibição do botão de mais para exibir 
o modal independente das telas em execução em vez de criar 
um componente e importar para os ambas as telas e ser menos eficiente
*/ 
export const AuthContextList:any = createContext ({});

export const AuthProviderList =  (props: any): any => {
    
    const modalizeRef = useRef<Modalize>(null);// Pegando a referencia do Modal 

    const container = () =>{
        return (
            <View style = {styleModal.container}>
                <View style = {styleModal.cabecalho}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="close"
                            size={30}
                            color={themes.colors.verdeCLaroIfba}
                        />
                    </TouchableOpacity>
                    <Text style = {styleModal.texto}>
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
                <View style = {styleModal.corpo}>
                    <Input
                        title="Titulo"
                    />
                    <Input
                        title="Descrição"
                        heigh={100}
                        multiline
                        numberOfLines={5}
                    />
                    <View style = {{width:'40%'}}>
                        <Input
                            title="Tempo Limite"
                        />
                    </View>
                    <View style = {styleModal.containerFlag}>
                        <Text style = {styleModal.textoFlag}>
                            Prioridade
                        </Text>
                        <View style = {styleModal.prioridades}>
                            <Prioridade
                                caption="Urgente"
                                color= {themes.colors.vermelhoIfba}
                            />
                            <Prioridade
                                caption="Opcional"
                                color = {themes.colors.verdeMaisouMenos}                        
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    const abrir = () =>{
        modalizeRef?.current?.open();// Abertura do modal 
    }
    return (// Qual a navegação ou tela vai dentro 
        <AuthContextList.Provider value = {{abrir}}>
            {props.children}
            <Modalize //A tela que abre por cima 
                ref={modalizeRef}
                childrenStyle = {{height: Dimensions.get("window").height/1.4}}// Altura que ele vai pegar da tela
                adjustToContentHeight = {true}
                modalStyle={styleModal.modal} // Estilo do conteúdo do modal
            >
                {container()}// O que vai ter dentro do modal
            </Modalize>
        </AuthContextList.Provider>
    );
}

export const useAuth = () => useContext (AuthContextList);