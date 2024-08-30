import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardJogos from '../../components/cardJogos'; 
import { useState, useEffect } from 'react';


export default function HomeIndex() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    async function buscarJogos() {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=92f0698a8d1445009195bcc4dc49e54a');
        const data = await response.json();
        setJogos(data.results);
      } catch (error) {
        console.log('Erro ao Buscar Jogos', error);
      }
    }
    buscarJogos();
  }, []); 

  return (
    <View style={styles.container}>
      

      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={jogos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardJogos
              titulo={item.name} 
              imagem={item.background_image} 
              nota={item.metacritic} 
              data={item.released}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46b5bd',
    alignItems: 'center'
  },
});
