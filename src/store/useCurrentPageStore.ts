import { create } from 'zustand';

interface StoreState {
  value: number | null;
  setValue: (v: number) => void;
}

export const useCurrentPageStore = create<StoreState>((set) => ({
  value: 1,
  setValue: (v) => set({ value: v })
}));
