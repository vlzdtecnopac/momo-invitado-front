import { create } from "zustand";
import axios from "axios";
import { tokenHeader } from "../helpers/token-header.helper";
import axiosInstance from "../helpers/axios.helper";

interface ProductOptioInterface {
  size: string;
  milk: string;
  sugar: string;
  extra_coffee: string;
  extra_cream: string;
  lid: string;
  no_lid: string;
  temperature: number;
  macha_sauce: string;
  chipotle_sauce: string;
  create_at: Date;
  update_at: Date;
}

interface ProductOptionStoreInterface {
  dataEmployee: ProductOptioInterface[];
  fetchEmployeeData: (shopping_id: string) => Promise<Boolean>;
}

export const useEmployeeStore = create<ProductOptionStoreInterface>((set) => ({
  dataEmployee: [],
  fetchEmployeeData: async (employee_id) =>
    new Promise((resolve, reject) => {
      axiosInstance
        .get(`/users/employee/?employee_id=${employee_id}`)
        .then((response) => {
          set({ dataEmployee: response.data });
          resolve(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false);
        });
    }),
}));
