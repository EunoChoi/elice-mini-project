'use client';

import styled from "styled-components";

import useSearch from "@/common/hooks/useSearch";
import CourseSearchResult from "./_components/SearchResult/SearchResult";
import SearchHeader from "./_components/SearchHeader/SearchHeader";


export default function Home() {
  useSearch();

  return (
    <Wrapper>
      <SearchHeader />
      <CourseSearchResult />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  padding : 24px 24px 63px 24px;
  margin : 0 auto;
  
  max-width: 1280px;
`
