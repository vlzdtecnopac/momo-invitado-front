import { create } from 'zustand'
import axiosInstance from '../helpers/axios.helper';

interface EmployeeInterface{
  id: number,
  employee_id: string,
  shopping_id: string,
  kiosko_id: string,
  first_name: string,
  last_name: string,
  phone: string,
  email: string,
  password: string,
  create_at: Date,
  update_at: Date,
}

interface EmployeeStoreInterface{
    dataEmployee: EmployeeInterface[],
    fetchEmployeeData: (shopping_id: string) => Promise<Boolean>
}

export const useEmployeeStore = create<EmployeeStoreInterface>((set) => ({
  dataEmployee: [],
  fetchEmployeeData: async (employee_id) =>  new Promise((resolve, reject) => {
    axiosInstance.get(`/users/employee/?employee_id=${employee_id}`)
        .then((response) => {
          set({ dataEmployee: response.data.items });
          resolve(response.data); 
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
          reject(false);
        });
    })
}));
