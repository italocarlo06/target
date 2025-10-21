import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

type props = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: props) {
    return (
        <TouchableOpacity 
           style={styles.container} 
           activeOpacity={0.8}
           disabled={isLoading}
           {...rest}
        >
           <Text style={styles.title}>{isLoading ? <ActivityIndicator color={colors.white} size={"small"} /> : title}</Text>
        </TouchableOpacity>
    );
}