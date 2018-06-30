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
            
        <View>
            <View style={styles.columnas}>
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
                    style = {styles.celdaSola}
                    value={this.calculaResultado()} 
                />
            </View>
            </View>
        </View>
        
        );
    }
}

const styles = StyleSheet.create({
    columnas:{
        padding: 5,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      borderWidth: 1.5,
      borderColor: '#000088'
    },
    celdas: {
      //height:45,
      width: "100%",
      borderColor:"black",
      borderWidth: 1,
      fontSize: 20,
      textAlign: 'center'
    },
    celdaSola:{
        flex:1,
        width:'100%',
        borderColor:'#000077',
        borderWidth: 1,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default BandItem;

