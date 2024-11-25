import { filterInfo } from "@/constants/filterInfo";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getChipsCondition = (searchParams: ReadonlyURLSearchParams) => {
  const newChips: { name: string; query_key: string; query_value: string; is_free: boolean; enroll_type: number; }[] = [];
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
