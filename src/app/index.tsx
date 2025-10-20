import { HomeHeader } from "@/components/HomeHeader"
import { View } from "react-native"

const summary = {
    total: "R$ 2680,50",
    inputs: { 
                 label: "Entradas", 
                 value: "R$ 2.000,00" 
               },
    outputs: { 
                 label: "Saídas", 
                 value: "R$ 2.000,00" 
               }

}
export default function App() {
    return <View style={{flex: 1}}>        
       <HomeHeader data={summary} />
    </View>
}