import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    gasolina: '',
    etanol: '',
    resultado: 'Preencha os dados e calcule',
  };

  calculate = () => {
    const { etanol, gasolina } = this.state;

      if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.7) {
        this.setState({ resultado: 'Vale a pena gasolina' });
      } else if (value < 0.7) {
        this.setState({ resultado: 'Vale a pena etanol' });
      } else {
        this.setState({ resultado: 'São equivalentes' });
      }
      console.log(value);
    }
  };

  /* realiza limpeza dos campos para nova consulta...*/
  clear = () => {
    this.setState({ gasolina: '' });
    this.setState({ etanol: '' });
    this.setState({ resultado: 'Preencha os dados e calcule' })
  }
  /****************************************************/

  onChangeText = value => {
    this.setState(value);
  };

  render() {
    return (
      <View style={styles.container}>

        <Card style={styles.cardImg}>
          <Image style={styles.img} source={require('./img/bomba-posto.png')} />
        </Card>

        <Text style={styles.textTitulo}>ETANOL OU GASOLINA ?</Text>

        <Card style={styles.cardPrincipal}>

          <TextInput
            style={styles.editEtanol}
            placeholder = "* Valor da Etanol"
            placeholderTextColor = '#f8f8ff'
            keyboardType={'numeric'} /*Só aceita números*/
            value={this.state.etanol}
            onChangeText={etanol => this.onChangeText({ etanol })}
          />

          <TextInput
            style={styles.editGasolina}
            placeholder = "* Valor da Gasolina"
            placeholderTextColor = '#f8f8ff'
            keyboardType={'numeric'} /*Só aceita números*/
            value={this.state.gasolina}
            onChangeText={gasolina => this.onChangeText({ gasolina })}
          />

          <Card style={styles.cardBotao} >
            <Button onPress={() => this.calculate()} title="Calcular" />
          </Card>
          <Card>
            <Button 
             onPress={() => this.clear()} title="Limpar" />
          </Card>
          <Text style={styles.paragraph}>{this.state.resultado}</Text>

        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00bfff',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Segoe UI"'
  },

  cardImg: {
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },

  cardPrincipal: {
    padding: 10,
    backgroundColor: '#00bfff',
  },

  cardBotao: {
    marginBottom: 8,
  },

  editEtanol: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f8f8ff',
    color: '#f8f8ff',
    height: 40,
    padding: 5,
    marginBottom: 10,
    textAlign:'center',
  },

  editGasolina: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f8f8ff',
    color: '#f8f8ff',
    height: 40,
    padding: 5,
    marginBottom: 10,
    textAlign:'center'
  },

  img: {
    width: 100,
    height: 100,
  },

  textTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#f8f8ff',
    fontFamily: 'Segoe UI"'
  },
});
