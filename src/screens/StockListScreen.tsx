import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import {Stock} from '../models/Stock';
import SortOptionsModal from '../components/SortOptionsModal';
import {StockListViewModel} from '../viewmodels/StockListViewModel';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SortedStockList from '../components/SortedStockList';
import {sortStocks} from '../utils/sortingUtils';
import styles from '../styles/StockListScreenStyles';

type RootStackParamList = {
  StockDetail: {stock: Stock};
};

type StockListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StockDetail'
>;

const StockListScreen: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const stockListViewModel = new StockListViewModel();
  const navigation = useNavigation<StockListScreenNavigationProp>();
  const buttonTitles = ['ID', 'Title', 'Price'];

  useEffect(() => {
    stockListViewModel.loadStocks().then(data => {
      setStocks(data.products);
    });
  }, []);

  const navigateToStockDetail = useCallback(
    (stock: Stock) => {
      navigation.navigate('StockDetail', {stock});
    },
    [navigation],
  );

  const openSortOptionsModal = useCallback((sortBy: string) => {
    setSortBy(sortBy);
    setIsModalVisible(true);
  }, []);

  const onSortOptionSelected = useCallback(
    (selectedSortOrder: 'asc' | 'desc') => {
      setSortOrder(selectedSortOrder);
      setIsModalVisible(false);
    },
    [],
  );

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const sortedStocks = useMemo(() => {
    return sortStocks(stocks, sortBy, sortOrder);
  }, [stocks, sortBy, sortOrder]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {buttonTitles.map(title => (
            <Button
              key={title}
              title={`Sort by ${title}`}
              onPress={() => openSortOptionsModal(title.toLowerCase())}
            />
          ))}
        </View>
        <SortOptionsModal
          visible={isModalVisible}
          onSortOptionSelected={onSortOptionSelected}
          onClose={onCloseModal}
        />
        <SortedStockList
          stocks={sortedStocks}
          onSelectStock={navigateToStockDetail}
        />
      </View>
    </SafeAreaView>
  );
};

export default StockListScreen;
