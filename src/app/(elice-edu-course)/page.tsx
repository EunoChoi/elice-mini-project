'use client';

import styled from "styled-components";

//components
import Space from "@/common/components/Space";
import CourseSearchResult from "./_components/SearchResult/SearchResult";
import SearchHeader from "./_components/SearchHeader/SearchHeader";
import PageNavigation from "@/common/components/PageNavigation";

export default function Home() {
  return (
    <Wrapper>
      <SearchHeader />
      <Space $rem={0.625} />
      <CourseSearchResult />
      <Space $rem={0.75} />
      <PageNavigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  padding : 24px 24px 63px 24px;
  margin : 0 auto;
  
  max-width: 1280px;
`
