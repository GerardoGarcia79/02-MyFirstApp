import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.area}>
      <HelloWorldScreen name="Gerardo de León" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
