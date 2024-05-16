import {Stock} from './Stock';

export interface ApiResponse {
  limit: number;
  products: Stock[];
  skip: number;
  total: number;
}
