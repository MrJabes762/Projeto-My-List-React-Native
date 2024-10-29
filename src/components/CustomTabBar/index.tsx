
import React from "react";
import { TouchableOpacity, View } from "react-native"
import { styleTabBar } from "./style";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { themes } from "../../global/themes";


export default ({ state, navigation }) => {
    const ir = (screenName: string) =>{
        navigation.navigate (screenName);
    }

    return (
        <View
            style={styleTabBar.tabBar}>
            <TouchableOpacity style={styleTabBar.botao} onPress={() => ir("List")}>
                <AntDesign
                    name="bars"
                    style={{opacity: state.index === 0? 1:0.2,color : themes.colors.verdeCLaroIfba, fontSize:32}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styleTabBar.botaoCentro}>
                <View style = {{
                        width: '100%', 
                        left: 10, 
                        top:4
                    }}>
                    <Entypo
                        name="plus"
                        size={40}
                        color={'white'}
                    />
                </View>
                <View style = {{
                        flexDirection:'row-reverse',
                        width: '100%', 
                        right:10, 
                        bottom:10
                    }}>
                    <MaterialIcons
                        name="edit"
                        size={30}
                        color={'white'}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style= {styleTabBar.botao} onPress={() => ir("User")}>
                <FontAwesome
                    name="users"
                    style={{opacity: state.index === 1? 1:0.2,color : themes.colors.verdeCLaroIfba, fontSize:32}}
                />
            </TouchableOpacity>
        </View>
    );
}