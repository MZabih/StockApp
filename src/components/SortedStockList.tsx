import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Stock} from '../models/Stock';
import StockListItem from './StockListItem';
import styles from '../styles/SortedStockListStyles';

interface SortedStockListProps {
  stocks: Stock[];
  onSelectStock: (stock: Stock) => void;
}

const SortedStockList: React.FC<SortedStockListProps> = React.memo(
  ({stocks, onSelectStock}) => {
    const handleSelectStock = useCallback(
      (stock: Stock) => {
        onSelectStock(stock);
      },
      [onSelectStock],
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={stocks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <StockListItem
              stock={item}
              onPress={() => handleSelectStock(item)}
            />
          )}
        />
      </View>
    );
  },
);

export default SortedStockList;
