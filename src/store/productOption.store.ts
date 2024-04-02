import { create } from "zustand";

interface ProductOptioInterface {
  size: string;
  milk: string;
  sugar: string;
  extra_coffee: any;
  lid: string;
  temperature: string;
  sauce: string;
  color: string;
  coffee_type: string;
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
      lid: "",
      temperature: "",
      sauce: "",
      color: "",
      coffee_type: "",
    },
    setDataProductOption: (value) =>
      set((state) => ({
        ...state,
        dataProductOption: { ...state.dataProductOption, ...value },
      })),
  })
);
