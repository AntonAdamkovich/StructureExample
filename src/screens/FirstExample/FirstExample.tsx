import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../../components/Button';

interface Props {
  navigateToSecondExample(): void;
}

export default function FirstExample(props: Props) {
  return (
    <View style={styles.container}>
      <Button onPress={props.navigateToSecondExample}>
        PRESS ME
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
