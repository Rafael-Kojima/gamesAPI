import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#46b5bd', 
    padding: 16, 
  },
  imageBanner: {
    width: '100%',
    height: 300, 
    borderRadius: 8, 
    marginBottom: 16, 
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1, 
  },
  detailsContainer: {
    marginTop: 20, 
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24, 
  },
});

export default styles;
