import { DefaultTheme } from "@react-navigation/native";
import colors from "../Components/config/Colors";

export default {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary:colors.primary,
        background:colors.white
    }
}