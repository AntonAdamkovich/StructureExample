import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../Button';

interface Props {
  closeModal(): void;
  data: any,
}

export default function BaseModal(props: Props) {
  return  (
    <View style={styles.container}>
      <Text style={styles.text}>
        THIS IS MODAL
      </Text>
      <Button onPress={props.closeModal}>
        CLOSE
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
});
