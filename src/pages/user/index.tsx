import React from "react";
import { styleUser } from "./style";
import {Ionicons} from '@expo/vector-icons';
import { Text, View,Alert,TouchableOpacity } from "react-native";
import { useNavigation,NavigationProp  } from '@react-navigation/native';
import { themes } from "../../global/themes";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("Logout", "Você saiu da conta.");
        return navigation.reset({routes:[{name :'Login'}]});
    };

    return (
        <View style={styleUser.container}>
            <Text style={styleUser.name}>Mr.Jabes</Text>
            <TouchableOpacity style={styleUser.logoutButton} onPress={handleLogout}>
                <Ionicons 
                    name="exit"  
                    style={{color:themes.colors.verdeEscuroIfba}}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    );
}