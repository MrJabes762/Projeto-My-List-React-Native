import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../global/themes";



export const styleUser = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: themes.colors.verdeCLaroIfba,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "white",
    },
    logoutButton: {
        position:'absolute',
        bottom:20,
        right:20
    },
})