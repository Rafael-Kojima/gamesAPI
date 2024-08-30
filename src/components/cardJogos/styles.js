import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerJogos: {
    width: 150, 
    marginRight: 10, 
    backgroundColor: '#1e1e1e', 
    borderRadius: 8,
    padding: 10,
    overflow: 'hidden', 
  },
  images: {
    width: '100%',
    height: 100, 
  },
  titulo: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
  textData: {
    fontSize: 12,
    color: 'lightgray',
    paddingHorizontal: 5,
  },
  textNota: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 5,
  },
});

export default styles;
