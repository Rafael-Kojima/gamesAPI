import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../../components/header';
import CardJogos from '../../components/cardJogos'; 
import Footer from '../../components/footer';
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
      <Header></Header>

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
              avaliacao={item.rating} 
              data={item.released}
              plataformas={item.platforms.map(p => p.platform.name).join(', ')}
              generos={item.genres.map(g => g.name).join(', ')} 
              tags={item.tags.map(t => t.name).join(', ')} 
              screenshots={item.short_screenshots}
            />
          )}
        />
      </View>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A55A6',
    alignItems: 'center',
    gap: 12
  },
});
