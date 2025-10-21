import { StyleSheet } from "react-native";
import { colors, FontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[500],
        height: 48,
        width: "100%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        fontFamily: FontFamily.medium,
        fontSize: 14,
        color: colors.white
    }
});        