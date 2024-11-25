import { Dispatch, SetStateAction } from "react";

export interface ChipValue {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

export type SelectedChips = ChipValue[];
export type SetSelectedChips = Dispatch<SetStateAction<ChipValue[]>>;