import { filterInfo } from "@/constants/filterInfo";
import { ReadonlyURLSearchParams } from "next/navigation";

import { ChipValue } from "@/types/Chip";

export const getChipsCondition = (searchParams: ReadonlyURLSearchParams) => {
  const newChips: ChipValue[] = [];
  for (const chips of filterInfo) {

    filterInfo.forEach(filterType => {
      for (const chip of chips.items) {
        if (searchParams.getAll(chip.query_key).includes(chip.query_value)) {
          newChips.push(chip);
        }
      }
    });
  }
  return newChips;
};
