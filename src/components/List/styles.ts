import { colors, FontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {      
        flex: 1,

    },
    listContent: {           
      paddingBottom: 72
    },
    empty: {
        fontSize: 14,
        color: colors.gray[600],
        fontFamily: FontFamily.regular,     
    },
    title: {
      marginTop: 24,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray[200],
      fontSize: 18,
      fontFamily: FontFamily.medium,
      color: colors.black

    }
});