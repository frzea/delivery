import { create } from "zustand";

type SelectedParcelSize = {
  id: number | null;
  name: string;
  length: number;
  width: number;
  height: number;
  isCustom: boolean;
};

type DeliveryStore = {
  postCity: string;
  getCity: string;
  setCity: (mode: "from" | "to", city: string) => void;
  sizeParcel: string;
  selectedSize: SelectedParcelSize | null;
  setSelectedSize: (size: SelectedParcelSize) => void;
  setExactDimensions: (length: number, width: number, height: number) => void;
};

export const useDeliveryStore = create<DeliveryStore>()((set, get) => ({
  postCity: "Місто відправки",
  getCity: "Місто призначення",
  sizeParcel: "Не вказаний",
  selectedSize: null,

  setCity: (mode, city) => {
    set(mode === "from" ? { postCity: city } : { getCity: city });
  },
  setSelectedSize: (size) => set({ selectedSize: size }),

  setExactDimensions: (length, width, height) =>
    set({
      selectedSize: {
        id: null,
        name: "Точний розмір",
        length,
        width,
        height,
        isCustom: true,
      },
    }),
}));
