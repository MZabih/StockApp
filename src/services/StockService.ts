import {ApiResponse} from '../models/ApiResponse';
import {API_URLS} from './ApiUrls';

export class StockService {
  static async fetchStocks(): Promise<ApiResponse> {
    try {
      const response = await fetch(API_URLS.STOCKS);
      if (!response.ok) {
        throw new Error('Failed to fetch stocks');
      }
      const data = await response.json();
      return data as ApiResponse;
    } catch (error) {
      throw new Error('Failed to fetch stocks');
    }
  }
}
