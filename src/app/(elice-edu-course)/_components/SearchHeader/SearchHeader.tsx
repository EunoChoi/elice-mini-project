import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Space from "@/common/components/Space";

const SearchHeader = () => {
  return (
    <>
      <Search />
      <Space rem={0.625} />
      <Filter />
    </>
  );
}

export default SearchHeader;