import { create } from 'zustand';

import { ChipValue } from '@/types/Chip';

interface StoreState {
  value: ChipValue[];
  setValue: (v: ChipValue[]) => void;
}

export const useSelectedChipsStore = create<StoreState>((set) => ({
  value: [],
  setValue: (v: ChipValue[]) => set({ value: v })
}));