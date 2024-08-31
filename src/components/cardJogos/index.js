import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function CardJogos({ titulo, imagem, data, avaliacao, plataformas, generos, tags, screenshots }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.containerJogos} 
            onPress={() => navigation.navigate('Details', { 
                titulo, 
                imagem, 
                data, 
                avaliacao, 
                plataformas, 
                generos, 
                tags,
                screenshots
            })}
        >
            <Image 
                style={styles.images} 
                source={{ uri: imagem }} 
            />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.textData}>{data}</Text>
            <Text style={styles.textNota}>Avaliação: {avaliacao}</Text>
        </TouchableOpacity>
    );
}
