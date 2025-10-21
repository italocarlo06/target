
import { View, Text, Button } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Target() {
    return <View style={{ flex: 1, padding: 24 }}> 
        <PageHeader 
           title="Nova Meta" 
           subtitle="Economize para alcançar sua meta financeira" 
           rightButton={{
            icon: 'edit',
            onPress: () => {}
           }}
        /> 
        <View style={{ marginTop: 32, gap: 24 }}>
            <Input
              label="Nome da Meta" 
              placeholder="Digite o nome da sua meta"
            />
            <CurrencyInput
              label="Valor Alvo"
              placeholder="Digite o valor da sua meta"
              value={0}
            />
            <Button 
              title="Salvar"           
            />
        </View>

        
    </View>;
}