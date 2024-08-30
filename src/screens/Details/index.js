import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  
 
  const { imagem, titulo, descricao } = route.params || {};

  return (
    <View style={styles.viewContainer}>
      <Image 
        resizeMode="stretch" 
        style={styles.imageBanner} 
        source= {imagem}
      />
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} 
        anterior
      >
        <AntDesign name="leftcircle" size={35} color="white" /> 
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.description}>{descricao}</Text>
        {}
      </View>
    </View>
  );
}
