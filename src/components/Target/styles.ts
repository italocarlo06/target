import { StyleSheet } from "react-native";
import { colors, FontFamily } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",       
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center", 
        gap: 12,
        paddingBottom: 16
    },
    content: {
        flex: 1,
        gap: 7,
    },
    target: {
        fontSize: 14,
        color: colors.white,
        fontFamily: FontFamily.regular
    },
    name: {
        fontSize: 14,
        color: colors.black,
        fontFamily: FontFamily.medium
    },
    status: {
        fontSize: 10,
        color: colors.gray[500],
        fontFamily: FontFamily.regular
    }
});

