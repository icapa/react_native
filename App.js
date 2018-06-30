import React,{ Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import BandItem from "./src/components/BandItem/BandItem";

export default class App extends React.Component {

  render() {
    return (
      
        <ScrollView style={{flex:1,}}>
          <View style={styles.container}>
            <BandItem key={0} f0={'50'} f1={'63'} f2={'80'} />
            <BandItem key={1} f0={'100'} f1={'125'} f2={'160'} />
            <BandItem key={2} f0={'200'} f1={'125'} f2={'160'} />
            <BandItem key={3} f0={'300'} f1={'125'} f2={'160'} />
            <BandItem key={4} f0={'400'} f1={'125'} f2={'160'} />
            <BandItem key={5} f0={'500'} f1={'125'} f2={'160'} />
            <BandItem key={6} f0={'600'} f1={'125'} f2={'160'} />
            <BandItem key={7} f0={'700'} f1={'125'} f2={'160'} />  
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