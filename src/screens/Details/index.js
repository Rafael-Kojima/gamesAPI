import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  
  const { imagem, titulo, data, avaliacao, plataformas, generos, tags, screenshots } = route.params || {};

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.viewContainer}>
        <Image 
          resizeMode="stretch" 
          style={styles.imageBanner} 
          source={{ uri: imagem }}
        />
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="leftcircle" size={35} color="white" /> 
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.text}>Data de Lançamento: {data}</Text>
          <Text style={styles.text}>Avaliação: {avaliacao}</Text>
          <Text style={styles.text}>Plataformas: {plataformas}</Text>
          <Text style={styles.text}>Gêneros: {generos}</Text>
          <Text style={styles.text}>Tags: {tags}</Text>
        </View>
        <View style={styles.screenshotContainer}>
          <Text style={styles.infoTitle}>Screenshots</Text>
          <FlatList
            data={screenshots}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={styles.screenshot}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
