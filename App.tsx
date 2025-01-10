/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.area}>
        {/* <HelloWorldScreen name="Gerardo de León" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
