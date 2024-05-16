import React from 'react';
import {View} from 'react-native';
import {Stock} from '../models/Stock';
import StockDetail from '../components/StockDetail';
import styles from '../styles/StockDetailScreenStyles';

interface StockDetailScreenProps {
  route: {
    params: {
      stock: Stock;
    };
  };
}

const StockDetailScreen: React.FC<StockDetailScreenProps> = React.memo(
  ({route}) => {
    const {stock} = route.params;

    return (
      <View style={styles.container}>
        <StockDetail stock={stock} />
      </View>
    );
  },
);

export default StockDetailScreen;
