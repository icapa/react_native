import React,{Component} from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

class BandItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            db0:'',db1:'',db2:'',
            resultado:'' 
        } 
    }

    calculaResultado = () =>{
        let aux0 = Math.pow(10,parseFloat(this.state.db0)/(-10));
        let aux1 = Math.pow(10,parseFloat(this.state.db1)/(-10));
        let aux2 = Math.pow(10,parseFloat(this.state.db2)/(-10));


        let res = -10 * Math.log10((aux0+aux1+aux2)/3);
        if (!isNaN(res))
            return (res.toFixed(2));
        else 
            return ('---')
    }


    render(){ 
        return (
        <View style={styles.bigContainer}>
            <View style={styles.container}>
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.props.f0} 
                />
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.props.f1} 
                />
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.props.f2} 
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.state.db0} 
                    onChangeText={(text) => {this.setState({db0:text});}}
                />
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.state.db1} 
                    onChangeText={(text) => {this.setState({db1:text});}}
                />
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.state.db2} 
                    onChangeText={(text) => {this.setState({db2:text});}}
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    keyboardType='numeric'
                    style = {styles.celdas}
                    value={this.calculaResultado()} 
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //height:  "15%",
      padding: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    bigContainer:{
      //flex: 1,
      height:"20%",
      width:"100%",
      padding: 0,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row'
    },
    celdas: {
      flex: 1,
      width: "100%",
      backgroundColor: '#fff',
      justifyContent: 'center',
      //width: 300, 
      borderColor:"black",
      borderWidth: 1
      
    }
});

export default BandItem;

