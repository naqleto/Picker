import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function App() {
 
  const [carroSelecionado, setCarroSelecionado] = useState (0);
   
  const [carros, setCarros] = useState ([
    {key: 1, nome: 'Gol', valor: 35.000 },
    {key: 2, nome: 'Maverick', valor: 55.000 },
    {key: 3, nome: 'Opala Comodoro', valor: 40.000 },
    {key: 4, nome: 'Fusca', valor: 60.000 },
  ])

  

  let carrosItem =carros.map((v, k) =>{
    return <Picker.Item key={k} value={k} label={v.nome} />
  })
  return (
    <View style={styles.container}>       
      <Picker
      selectedValue={carroSelecionado}
      onValueChange={(itemValue, itemIndex) => setCarroSelecionado (itemValue)}
      >
        {carrosItem}        
      </Picker>
      <Text style={[styles.carros, styles.texto]}>Carro: {carros[carroSelecionado].nome} </Text>
      <Text style={[styles.carros, styles.texto]}>R$: {carros[carroSelecionado].valor.toFixed(3)} </Text>

        <Text style={[styles.texto, styles.carros]}>
          Valor do Carro:  {carros[carroSelecionado].valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</Text>
      <Image style={styles.imagens}
      source={require('./img/Gol.png')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150
  },
  carros:{
    marginTop: 15,
    fontSize: 20
  },
  imagens:{
    margin: 20,
    marginTop: 10,
    width:200,
    height:200,
    textAlign: 'center',
    alignItems: 'center'

  },

  texto:{
    margin: 20
  }
  
});

