import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>

                <View>
                    <Image
                        style={estilos.imagem}
                        source={{ uri: 'https://openweathermap.org/img/wn/' + props.previsao.weather[0].icon + '.png' }}
                    />
                    <View style={estilos.primeiraLinha}>
                        <Text style={estilos.titulo}>
                            {new Date(props.previsao.dt * 1000).getDay()
                                + '/' + new Date(props.previsao.dt * 1000).getMonth()
                                + '/' + new Date(props.previsao.dt * 1000).getFullYear()
                            } - {props.previsao.weather[0].description.toUpperCase()}
                        </Text>
                    </View>
                    <View style={estilos.proximaLinha}>
                        <Text style={estilos.titulo}>SOL</Text>
                        <View style={estilos.valor}>
                            <Text>
                                Nascer: {new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}
                            </Text>
                            <Text>
                                Pôr: {new Date(props.previsao.sunset * 1000).toLocaleTimeString()}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={estilos.proximaLinha}>
                            <Text style={estilos.titulo}>SENSAÇÃO TÉRMICA</Text>
                            <View style={estilos.valor}>
                                <Text >
                                    Dia: {props.previsao.feels_like.day} °C
                                </Text>
                                <Text>
                                    Manhã: {props.previsao.feels_like.morn} °C
                                </Text>
                                <Text>
                                    Tarde: {props.previsao.feels_like.eve} °C
                                </Text>
                                <Text>
                                    Noite: {props.previsao.feels_like.night} °C
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    proximaLinha: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        alignItems: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default PrevisaoItem;