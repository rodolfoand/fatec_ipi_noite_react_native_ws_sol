import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PrevisaoItem from './componentes/PrevisaoItem';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const endPointSol = "https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&";  //lat=-23.2642&lon=-47.2992&appid=1e7ae962cdf26b7e0ef5f66b9b347d02"

  const apiKey = ""; // https://openweathermap.org/forecast5

  const [cidade, setCidade] = useState('');
  const [sol, setSol] = useState([]);

  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }

  const obterPrevisoes = () => {
    const target = endPoint + cidade + '&appid=' + apiKey;
    fetch(target)
      .then((dados => dados.json()))
      .then(dados => {
        var city = dados["city"];
        obterSol(city.coord.lat, city.coord.lon);
      });
  }

  const obterSol = (lat, lon) => {
    setSol([]);
    const target = endPointSol + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(target)
      .then((dados => dados.json()))
      .then(dados => {
        setSol(dados["daily"]);
      });

  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
        />
        <Button
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={sol}
        renderItem={
          previsao => <PrevisaoItem previsao={previsao.item}></PrevisaoItem>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  entrada: {
    flexDirection: 'column'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    marginBottom: 4,
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40
  }
});