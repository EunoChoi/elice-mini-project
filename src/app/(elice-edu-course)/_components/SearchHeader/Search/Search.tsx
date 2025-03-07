'use client';

import useInput from "@/common/hooks/useInput";
import SearchIcon from "@/common/icons/SearchIcon";
import { useSearchKeywordStore } from "@/store/useSearchKeywordStore";
import { SetSearchKeyword } from "@/types/SearchKeyword";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const Search = () => {
  const { setValue: setSearchKeyword } = useSearchKeywordStore();

  const searchParams = useSearchParams();
  const { value, debouncedValue, onChange } = useInput(searchParams.get("keyword"), 400);

  useEffect(() => {
    setSearchKeyword(debouncedValue ? debouncedValue : '');
  }, [debouncedValue]);

  return (<Wrapper>
    <SearchIconWrapper><SearchIcon width={18} height={18} /></SearchIconWrapper>
    <SearchInputWrapper>
      <SearchInput
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={value ? value : ''}
        onChange={onChange}
      ></SearchInput>
    </SearchInputWrapper>
  </Wrapper>);
}

export default Search;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  border: 1px solid var(--grey5);
  border-radius :0.25rem;
  background-color: var(--white);

  &:focus-within {
    border-color: var(--elice-violet);
  }
`;
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
const SearchInputWrapper = styled.div`
  width: 100%;
  margin: 0px 1rem;

  ::placeholder {
    color: #8d8d8d;
    color: var(--greyFont);
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 2.875rem;

  font-size: 0.875rem;
`
