import {Stock} from '../models/Stock';

function getSortingFunction(
  sortBy: string,
): (stockA: Stock, stockB: Stock) => number {
  switch (sortBy) {
    case 'id':
      return (stockA, stockB) => stockA.id - stockB.id;
    case 'title':
      return (stockA, stockB) => stockA.title.localeCompare(stockB.title);
    case 'price':
      return (stockA, stockB) => stockA.price - stockB.price;
    default:
      return (stockA, stockB) => stockA.id - stockB.id;
  }
}

export function sortStocks(
  stocks: Stock[],
  sortBy: string,
  sortOrder: 'asc' | 'desc',
): Stock[] {
  let sorted = [...stocks];
  const sortingFunction = getSortingFunction(sortBy);
  sorted.sort((stockA, stockB) => {
    const result = sortingFunction(stockA, stockB);
    return sortOrder === 'asc' ? result : -result;
  });
  return sorted;
}
