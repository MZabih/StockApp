import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Stock} from '../models/Stock';
import styles from '../styles/StockListItemStyles';

interface StockListItemProps {
  stock: Stock;
  onPress?: () => void;
}

class StockListItem extends React.PureComponent<StockListItemProps> {
  render() {
    const {stock, onPress} = this.props;

    const stockInfo = [
      {label: 'Title', value: stock.title},
      {label: 'Brand', value: stock.brand},
      {label: 'Price', value: stock.price.toString()},
    ];

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri: stock.thumbnail}} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            {stockInfo.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item.label}: {item.value}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default StockListItem;
