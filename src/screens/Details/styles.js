import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#2d2d3b',
    padding: 16,
  },
  imageBanner: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#3a3a4a',
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#3a3a4a',
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: 'lightgray',
    marginBottom: 8,
  },
  screenshotContainer: {
    marginTop: 16,
  },
  infoTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    paddingBottom: 4,
  },
  screenshot: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default styles;
