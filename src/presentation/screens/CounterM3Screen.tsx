import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        label="+1"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
