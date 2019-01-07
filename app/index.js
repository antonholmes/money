import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <Home />;

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Let's build a Currency Converter from app/index.js</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
