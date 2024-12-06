import React from "react";
import { View, Text } from "react-native";
import { stylePrioridade } from "./style";
import { themes } from "../../global/themes";

type Props = {
    caption: string; // Removi as aspas que não eram necessárias.
    color?: string; // Deixa como opcional, caso precise sobrescrever.
    selected?: boolean;
};

export function Prioridade({ caption, color, selected }: Props) {
    // Define a cor com base no caption.
    const backgroundColor =
        caption === "Urgente" ? themes.colors.vermelhoIfba : caption === "Opcional" ? themes.colors.verdeMaisouMenos : color || "gray";

    return (
        <View
            style={[
                stylePrioridade.container,
                { backgroundColor },
                selected && { borderWidth: 2, borderColor: "black" }, // Exemplo de borda com cor.
            ]}
        >
            <Text style={stylePrioridade.textoBotao}>{caption}</Text>
        </View>
    );
}
