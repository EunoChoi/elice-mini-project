import { create } from 'zustand';

interface StoreState {
  value: string | null;
  setValue: (v: string) => void;
}

export const useSearchKeywordStore = create<StoreState>((set) => ({
  value: '',
  setValue: (v) => set({ value: v })
}));