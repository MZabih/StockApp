import {StyleSheet} from 'react-native';
import Colors from '../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 5,
  },
  textContainer: {
    flex: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default styles;
