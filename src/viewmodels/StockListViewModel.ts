import {ApiResponse} from '../models/ApiResponse';
import {StockService} from '../services/StockService';

export class StockListViewModel {
  async loadStocks(): Promise<ApiResponse> {
    return await StockService.fetchStocks();
  }
}

export default StockListViewModel;
