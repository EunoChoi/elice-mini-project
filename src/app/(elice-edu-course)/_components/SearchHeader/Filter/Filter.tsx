import { filterInfo } from "@/constants/filterInfo";
import styled from "styled-components";
import Chip from "./Chip";

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
}

const Filter = ({ chips, setChips }: Props) => {

  return (<Wrapper>
    {filterInfo.map((filter) =>
      <FilterType key={filter.title}>
        <FilterTypeTitle>{filter.title}</FilterTypeTitle>
        <FilterTypeChips>
          {filter.items.map(chipValue =>
            <Chip key={chipValue.name} chipValue={chipValue} chips={chips} setChips={setChips} />
          )}
        </FilterTypeChips>
      </FilterType>
    )}
  </Wrapper>);
}

export default Filter;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  background-color: var(--white);
  border : 1px solid var(--grey4);
`
const FilterType = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--grey4);

  &:last-child{
    border-bottom: none;
  }
`
const FilterTypeTitle = styled.div`
  min-width: 6rem;
  padding: 0.875rem 1rem;
  width: auto;
  height: auto;

  background-color: var(--grey1);
  color: var(--greyFont2);
  border-right: 1px solid var(--grey4);

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;
`
const FilterTypeChips = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 0 0.5rem;
`