import React, {Component} from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default class ScreenWrapper extends Component {

    render(){
        const {children} = this.props

      return(  
      <SafeAreaView  style={styles.container}>
        <SafeAreaProvider  style={styles.container}>
          {children}
        </SafeAreaProvider>
        </SafeAreaView>
      )    
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });

