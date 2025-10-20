import { ColorValue, View } from "react-native";
import styles from "./styles";

type SeparatorProps = {
    color?: ColorValue;
}

export function Separator({ color = "#E2E2E2" }: SeparatorProps) {
    return <View
        style={[styles.container, { backgroundColor: color }]}
    />
}