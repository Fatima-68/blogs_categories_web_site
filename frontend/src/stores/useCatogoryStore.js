import { create } from "zustand";
const categoryStore = (set) =>({
    category: null,
    setCategory: (comingValue) => set({ category : comingValue}),
});
export const useCatogoryStore = create(categoryStore);
