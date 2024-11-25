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

  const { setSearch, chips, setChips, current, setCurrent, result, total, totalCourse } = useSearch();


  return (
    <Wrapper>
      <SearchHeader chips={chips} setChips={setChips} setSearch={setSearch} />
      <Space $rem={0.625} />
      <CourseSearchResult result={result?.courses} totalCourse={totalCourse} />
      <Space $rem={0.75} />
      <PageNavigation current={current} setCurrent={setCurrent} total={total} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  padding : 24px 24px 63px 24px;
  margin : 0 auto;
  
  max-width: 1280px;
`
