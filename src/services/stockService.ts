import axios, { type AxiosInstance } from 'axios';
import { ref } from 'vue';

const order = [
  'Mar 21', 'Jun 21', 'Sep 21', 'Dec 21', 'Mar 22', 'Jun 22', 'Sep 22',
  'Dec 22', 'Mar 23', '""', '3 Aug 23', '2 Nov 23', '1 Feb 24', '2 Mai 24'
];

class StockService {
  private apiClient: AxiosInstance;
  stockData = ref<any>(null);
  isLoading = ref(false);
  error = ref<string | null>(null);

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://sheetdb.io/api/v1/4i6szw3p0qsco'
    });
  }

  private async fetchData(sheetName: string): Promise<string[]> {
    try {
      const response = await this.apiClient.get(`?sheet=${sheetName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async getRevenue(sheetName: string): Promise<string[]> {
    const data = await this.fetchData(sheetName);

    if (data.length > 3 && typeof data[3] === 'object' && data[3] !== null) {
      return order.map(key => key as string);
    } else {
      console.error('Data at index 3 does not exist or is not an object');
      return [];
    }
  }

  async fetchStockData(sheetName: string) {
    this.isLoading.value = true;
    try {
      const response = await this.apiClient.get(`?sheet=${sheetName}`);
      this.stockData.value = response.data;
      this.isLoading.value = false;
    } catch (error) {
      this.isLoading.value = false;
      this.error.value = 'Error fetching data';
      console.error('Error fetching data:', error);
    }
  }
}

export const stockService = new StockService();