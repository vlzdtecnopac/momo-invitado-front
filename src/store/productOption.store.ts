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
  temperature: string;
  macha_sauce: string;
  chipotle_sauce: string;
  color: string;
}

interface ProductOptionStoreInterface {
  dataProductOption: ProductOptioInterface;
  setDataProductOption: (value: ProductOptioInterface) => void;
}

export const useProductOptionStore = create<ProductOptionStoreInterface>(
  (set) => ({
    dataProductOption: {
      size: "",
      milk: "",
      sugar: "",
      extra_coffee: "",
      extra_cream: "",
      lid: "",
      no_lid: "",
      temperature: "",
      macha_sauce: "",
      chipotle_sauce: "",
      color: "",
    },
    setDataProductOption: (value) =>
      set((state) => ({
        ...state,
        dataProductOption: { ...state.dataProductOption, ...value },
      })),
  })
);
