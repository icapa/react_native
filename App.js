import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {

  state = {
    A1: '',B1: '', C1: ''
  }
  hazLasOperaciones = () => {
    
      this.setState({C1: this.state.A1 + this.state.B1})
     //alert(this.state.A1 +' y ' + this.state.B1);
     /*
     var suma2 = Number.parseInt(this.state.A1,10)
     + Number.parseInt(this.state.B1,10);
     var suma3 = Number.parseInt(this.state.A1,10)
     + Number.parseInt(this.state.B1,10);
     var suma4 = Number.parseInt(this.state.A1,10)
     + Number.parseInt(this.state.B1,10);
     var suma5 = Number.parseInt(this.state.A1,10)
     + Number.parseInt(this.state.B1,10);
     */
  }
 

  render() {
    return (
      <View style={styles.bigContainer}>
      <View style={styles.container}>
          <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.A1} 
            onChangeText={(text) => 
            {    
              this.setState({
                A1:text
                },() => {
                    this.hazLasOperaciones();
                  }
                );
            }
            }
            />
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.B1} 
            onChangeText={(text) => 
            {  
              this.setState({
                B1: text
                },() => {
                  this.hazLasOperaciones();
                }
              );
              }
            }
            />
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.C1} 
            //onChangeText={this.placeNameChangeHandler}
            />
      </View>
      <View style={styles.container}>
          <TextInput 
          keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.A2} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.B2} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.C2} 
            onChangeText={this.placeNameChangeHandler}/>
      </View>
      <View style={styles.container}>
          <TextInput 
          keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.A3} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.B3} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.C3} 
            onChangeText={this.placeNameChangeHandler}/>
      </View>
      <View style={styles.container}>
          <TextInput 
          keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.A4} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.B4} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.C4} 
            onChangeText={this.placeNameChangeHandler}/>
      </View>
      <View style={styles.container}>
          <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.A5} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.B5} 
            onChangeText={this.placeNameChangeHandler}/>
            <TextInput 
            keyboardType='numeric'
            style = {styles.celdas}
            value={this.state.C5} 
            onChangeText={this.placeNameChangeHandler}/>
      </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height:  "15%",
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  bigContainer:{
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'column'
  },
  celdas: {
    //flex: 1,
    width: "33%",
    backgroundColor: '#fff',
    justifyContent: 'center',
    //width: 300, 
    borderColor:"black",
    borderWidth: 1
    
  }
});
