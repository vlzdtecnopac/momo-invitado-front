import { create } from 'zustand'
import axiosInstance from "../helpers/axios.helper";

interface ShoppingInterface {
  id: number;
  shopping_id: string;
  name_shopping: string;
  no_shooping: string;
  address: string;
  email: string;
  idenfication: string;
  phone: string;
  closing: any;
  open: any;
  create_at: string;
}

interface DesignStoreInterface {
  dataStore: ShoppingInterface[];
  cart: boolean;
  fetchStoreData: (shopping_id: string) => Promise<Boolean>;
  setStoreCart: (cart: boolean) => void;
}

export const useShoppingStore = create<DesignStoreInterface>((set) => ({
  dataStore: [],
  cart: false,
  fetchStoreData: async (shopping_id) =>
    new Promise((resolve, reject) => {
      axiosInstance
        .get(`/shopping/?shopping_id=${shopping_id}`)
        .then((response) => {
          set((state) => ({ ...state, dataStore: response.data }));
          resolve(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false);
        });
    }),
  setStoreCart: (value) =>
  set((state) => ({ ...state, cart: value }))
}));
