import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../Themes/Colors';

const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    // container style
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    margin: 0,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    height: 230,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  image: {
    width: screenWidth - 20,
    marginTop: 10,
    height: 200,
  },
  caraouselContainer: {
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeCarouselView: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  currentSlide: {
    backgroundColor: Colors.cadiumGreen,
  },
  inActiveSlide: {
    backgroundColor: Colors.grey,
  },
});
