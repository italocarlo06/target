import {View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export type TargetProps = {    
    id?: string;
    name: string;
    percentage: string;
    current: string;
    target: string;
}

export type Props = TouchableOpacityProps & {
    data: TargetProps;
}

export function Target({ data, ...rest }: Props) {
    return (       
        <TouchableOpacity style={styles.container} {...rest}>
          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
            <Text style={styles.status}>{data.percentage}• {data.current} de {data.target}</Text>            
            <MaterialIcons name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>        
    );
}