import {ApiResponse} from '../models/ApiResponse';

interface StockListViewModel {
  loadStocks(): Promise<ApiResponse>;
}

export default StockListViewModel;
