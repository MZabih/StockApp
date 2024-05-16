import React, {useState, useCallback} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {Stock} from '../models/Stock';
import styles from '../styles/StockDetailStyles';

interface StockDetailProps {
  stock: Stock;
}

const {width: screenWidth} = Dimensions.get('window');

const StockDetail: React.FC<StockDetailProps> = ({stock}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleScrollEnd = useCallback(
    (event: {nativeEvent: any}) => {
      if (!event) {
        return;
      }
      const {nativeEvent} = event;
      if (nativeEvent && nativeEvent.contentOffset) {
        let currentSlide = 1;
        if (nativeEvent.contentOffset.x === 0) {
          setCurrentSlide(currentSlide);
        } else {
          const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth;
          currentSlide =
            Math.ceil(parseFloat(approxCurrentSlide.toFixed(2))) + 1;
          setCurrentSlide(
            currentSlide > stock.images.length
              ? stock.images.length
              : currentSlide,
          );
        }
      }
    },
    [setCurrentSlide, screenWidth, stock],
  );

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageContainer}
          onMomentumScrollEnd={handleScrollEnd}>
          {stock.images.map((uri, index) => (
            <Image key={index} source={{uri}} style={styles.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.caraouselContainer}>
        {stock.images.map((_uri, index) => (
          <View
            key={index}
            style={[
              styles.activeCarouselView,
              currentSlide === index + 1
                ? styles.currentSlide
                : styles.inActiveSlide,
            ]}></View>
        ))}
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={styles.title}>{stock.title}</Text>
        <Text style={styles.content}>Price: {stock.price}</Text>
        <Text style={styles.content}>Ratings: {stock.rating}</Text>
        <Text style={styles.content}>
          Discounted Percentage: {stock.discountPercentage}
        </Text>
      </View>
    </View>
  );
};

export default StockDetail;
