import React, { useEffect, useState } from "react";
import { Text, Modal, View, Platform } from "react-native";
import DateTimerPicker from "@react-native-community/datetimepicker";
import { styleDateTimer } from "./style";

export function DateTimer({ type, onDataChanged, mostrar, setMostrar }) {
  const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (onDataChanged){
            onDataChanged (date);
        }
    },[date,onDataChanged]);

  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      // Quando o usuário confirma a data/hora
      const currentDate = selectedDate || date;
      setDate(currentDate);
      onDataChanged(currentDate); // Notifica o pai sobre a mudança
    }
    // Fecha o modal após a seleção
    setMostrar(false);
  };

  return (
    <Modal
      transparent={true}
      visible={mostrar}
      animationType="slide"
      onRequestClose={() => setMostrar(false)} // Fecha ao pressionar o botão de voltar
    >
      <View style={styleDateTimer.modelOverlay}>
        <View
          style={[
            styleDateTimer.container,
            Platform.OS === "android" && { backgroundColor: "transparent" },
          ]}
        >
          <DateTimerPicker
            value={date}
            mode={type} // 'date' ou 'time'
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={onChange}
          />
        </View>
      </View>
    </Modal>
  );
}
