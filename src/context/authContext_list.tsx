import React, { createContext, useContext } from "react";
import { Alert } from "react-native";


/* Essa const fascilita a exibição do botão de mais para exibir 
o modal independente dos botões clicados em vez de criar 
um componente e importar para os ambas as telas e ser menos eficiente
*/ 
export const AuthContextList:any = createContext ({});

export const AuthProviderList =  (props: any): any => {
    
    const abrir = () =>{
        Alert.alert("Atenção", "Modal Aberto");
    }
    return (// Qual a navegação ou tela vai dentro 
        <AuthContextList.Provider value = {{abrir}}>
            {props.children}
        </AuthContextList.Provider>
    );
}

export const useAuth = () => useContext (AuthContextList);