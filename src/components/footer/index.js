import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 R&D Games</Text>
      <Text style={styles.text}>All rights reserved</Text>
    </View>
  );
}