import { colors, FontFamily } from "@/theme";
import { StyleSheet } from "react-native";
import { Summary } from "../Summary";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 324,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
        paddingBottom: 18,
        gap: 24
    },
    label: {
      fontSize: 12,
      color: colors.white,
      fontFamily: FontFamily.regular
    },
    total: {
      fontSize: 32,
      color: colors.white,
      fontFamily: FontFamily.medium
    },
    summary: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      gap: 12
    }
});