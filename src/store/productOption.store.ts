import { create } from "zustand";

export interface OptionData {
  name?: string;
  price?: number;
}

export interface ProductOptionInterface {
  size: OptionData;
  milk: OptionData;
  sugar: OptionData;
  extra_coffee: OptionData[];
  lid: OptionData[];
  sauce: OptionData[];
  temperature: OptionData;
  color: string;
  coffee_type: OptionData
}

export interface ProductOptionStoreInterface {
  dataProductOption: ProductOptionInterface;
  setDataProductOption: (value: Partial<ProductOptionInterface>) => void;
}

export const initialProductOptionState: ProductOptionInterface = {
  size: {},
  milk: {},
  sugar: {},
  extra_coffee: [],
  lid: [],
  sauce: [],
  temperature: {},
  color: "",
  coffee_type: {}
};

export const useProductOptionStore = create<ProductOptionStoreInterface>(
  (set) => ({
    dataProductOption: initialProductOptionState,
    setDataProductOption: (value) =>
      set((state) => ({
        dataProductOption: { ...state.dataProductOption, ...value },
      })),
  })
);