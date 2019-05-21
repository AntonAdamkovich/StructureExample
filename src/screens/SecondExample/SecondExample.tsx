import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../../components/Button/Button';

interface Props {
  openBaseModal(): void;
}

export default function SecondExample(props: Props) {
  return (
    <View style={styles.container}>
      <Button onPress={props.openBaseModal}>
        PRESS ME
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
