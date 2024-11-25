import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Space from "@/common/components/Space";
import { Dispatch, SetStateAction } from "react";

import { ChipValue, SelectedChips, SetSelectedChips } from "@/types/Chip";

interface Props {
  setSearchKeyword: Dispatch<SetStateAction<string | null>>;
  setSelectedChips: SetSelectedChips;
  selectedChips: SelectedChips;
}

const SearchHeader = ({ setSearchKeyword, setSelectedChips, selectedChips }: Props) => {
  return (
    <>
      <Search
        setSearchKeyword={setSearchKeyword} />
      <Space $rem={0.625} />
      <Filter
        selectedChips={selectedChips}
        setSelectedChips={setSelectedChips} />
    </>
  );
}

export default SearchHeader;