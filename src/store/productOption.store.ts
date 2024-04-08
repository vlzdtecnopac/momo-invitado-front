import { create } from "zustand";

interface OptionData{
  name: string,
  price: number
}

interface ProductOptioInterface {
  size: string;
  milk: string;
  sugar: string;
  extra_coffee: string[];
  lid: string[];
  sauce: string[];
  temperature: string;
  color: string;
  coffee_type: string;
}

interface ProductOptionStoreInterface {
  dataProductOption: ProductOptioInterface;
  setDataProductOption: (value: ProductOptioInterface) => void;
}

export const initialProductOptionState = {
  size: "",
  milk: "",
  sugar: "",
  extra_coffee: [],
  lid: [],
  sauce: [],
  temperature: "",
  color: "",
  coffee_type: "",
}

export const useProductOptionStore = create<ProductOptionStoreInterface>(
  (set) => ({
    dataProductOption: initialProductOptionState,
    setDataProductOption: (value) =>
      set((state) => ({
        ...state,
        dataProductOption: { ...state.dataProductOption, ...value },
      })),
   
  })
);
