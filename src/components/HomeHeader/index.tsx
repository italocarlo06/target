import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import { colors } from "@/theme/colors";
import { View, Text } from "react-native";
import { Separator } from "../Separator";
import { Summary, SummaryProps } from "../Summary";


export type HomeHeaderProps = {
    total: string
    inputs: SummaryProps
    outputs: SummaryProps
}

type Props = {
    data: HomeHeaderProps
}
export function HomeHeader({ data }: Props) {
    return <LinearGradient
        style={styles.container}
        colors={[colors.blue[500], colors.blue[800]]}
    >
        <View>
            <Text>Você possui</Text>
            <Text style={styles.total}>{data.total} refeições</Text>
        </View>
        <Separator color={colors.blue[400]} />

        <View style={styles.summary}>
            <Summary 
               data={data.inputs} 
               icon={{ 
                name: "arrow-upward", 
                color: colors.green[500]
            }} 
            />
            <Summary 
               isRight
               data={data.outputs} 
               icon={{ 
                name: "arrow-downward", 
                color: colors.red[400]
            }} 
            />
        </View>
    </LinearGradient>
}