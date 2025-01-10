/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.area}>
        {/* <HelloWorldScreen name="Gerardo de León" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
