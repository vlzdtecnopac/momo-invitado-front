import { create } from "zustand";

export interface OptionData{
  name?: string,
  price?: number
}

interface ProductOptioInterface {
  size: OptionData;
  milk: OptionData;
  sugar: OptionData;
  extra_coffee: OptionData[];
  lid: OptionData[];
  sauce: OptionData[];
  temperature: OptionData;
  color: OptionData;
  coffee_type: OptionData;
}

interface ProductOptionStoreInterface {
  dataProductOption: ProductOptioInterface;
  setDataProductOption: (value: ProductOptioInterface) => void;
}

export const initialProductOptionState = {
  size: {},
  milk: {},
  sugar: {},
  extra_coffee: [],
  lid: [],
  sauce: [],
  temperature: {},
  color: {},
  coffee_type: {},
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
