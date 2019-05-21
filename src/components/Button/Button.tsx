import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  children?: string;
}

export default (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text>{props.children}</Text>
  </TouchableOpacity>
);
