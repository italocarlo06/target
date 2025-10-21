import { HomeHeader } from "@/components/HomeHeader"
import { Button } from "@/components/Button"
import { List } from "@/components/List"
import { Target, TargetProps } from "@/components/Target"
import { View, StatusBar } from "react-native"
import { router } from "expo-router"

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

const targets: TargetProps[] = [
    {
       id: "1",
       name: "Meta de Consumo",
       percentage: "75%",
       current: "1500",
       target: "2000"
    },
    {
       id: "2",
       name: "Meta de Exercícios",
       percentage: "50%",
       current: "15",
       target: "30"
    }
]

export default function App() {
    return <View style={{flex: 1}}>
       <StatusBar barStyle="light-content" />        
       <HomeHeader data={summary} />
       <List 
          containerStyle={{paddingHorizontal: 24}}
          data={targets} 
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />} 
          title="Metas"
        />
        <View style={{padding: 24, paddingBottom: 32}}>
          <Button title="Nova Meta" isLoading={false} onPress={() => router.navigate('/target')}/>
        </View>
    </View>
}