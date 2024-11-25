'use client';

import styled from "styled-components";

//hooks
import useSearch from "@/common/hooks/useSearch";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "./_api/getCourse";

//components
import Space from "@/common/components/Space";
import CourseSearchResult from "./_components/SearchResult/SearchResult";
import SearchHeader from "./_components/SearchHeader/SearchHeader";
import PageNavigation from "@/common/components/PageNavigation";


export default function Home() {
  const {
    searchKeyword,
    setSearchKeyword,
    selectedChips,
    setSelectedChips,
    currentPage,
    setCurrentPage,

    result,
    setResult,
  } = useSearch();


  return (
    <Wrapper>
      <SearchHeader setSearchKeyword={setSearchKeyword} selectedChips={selectedChips} setSelectedChips={setSelectedChips} />
      <CourseSearchResult result={result} />
      <PageNavigation
        currentPage={currentPage}
        totalPage={result?.totalPage}
        setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  padding : 24px 24px 63px 24px;
  margin : 0 auto;
  
  max-width: 1280px;
`
