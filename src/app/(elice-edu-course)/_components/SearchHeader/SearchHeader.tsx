import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Space from "@/common/components/Space";


interface ChipData {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

interface Props {
  chips: ChipData[];
  setChips: React.Dispatch<React.SetStateAction<ChipData[]>>;
  setSearch: (s: string) => void;
}

const SearchHeader = ({ chips, setChips, setSearch }: Props) => {
  return (
    <>
      <Search setSearch={setSearch} />
      <Space $rem={0.625} />
      <Filter chips={chips} setChips={setChips} />
    </>
  );
}

export default SearchHeader;