import { create } from "zustand";

type DeliveryStore = {
  postCity: string;
  getCity: string;
  setCity: (mode: "from" | "to", city: string) => void;
  sizeParcel: string;
  setSizeParcel: (size: string) => void;
};

export const useDeliveryStore = create<DeliveryStore>()((set, get) => ({
  postCity: "Місто відправки",
  getCity: "Місто призначення",
  sizeParcel: "Не вказаний",

  setCity: (mode, city) => {
    set(mode === "from" ? { postCity: city } : { getCity: city });
  },
  setSizeParcel: (size) => {
    set({ sizeParcel: size });
  },
}));
