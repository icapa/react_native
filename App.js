import React,{ Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import BandItem from "./src/components/BandItem/BandItem";
import Cabecera from "./src/components/Cabecera/Cabecera";

export default class App extends React.Component {
  
  rangoFrecuencias = [
    {f0:'50',f1:'63',f2:'80'},
    {f0:'100',f1:'125',f2:'160'},
    {f0:'200',f1:'250',f2:'315'},
    {f0:'400',f1:'500',f2:'630'},
    {f0:'800',f1:'1000',f2:'1250'},
    {f0:'1600',f1:'2000',f2:'2500'},
    {f0:'3150',f1:'4000',f2:'5000'},
    {f0:'6300',f1:'8000',f2:'10000'}
  ];

  
  listaOut = this.rangoFrecuencias.map((banda,i) =>(
      <BandItem key={i} f0={banda.f0} f1={banda.f1} f2={banda.f2} />
    ));

  render() {
    return (
      <ScrollView style={{flex:1,}}>
        <Cabecera/>
        <View style={styles.container}>
          {this.listaOut}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //height:  "15%",
    //padding: 30,
    //backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection:'column'
  },
});


/*
      <ScrollView>
        
      </ScrollView>
      */
