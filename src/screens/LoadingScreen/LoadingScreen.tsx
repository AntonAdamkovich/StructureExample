import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>
        LOADING
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  }
});
