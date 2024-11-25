'use client';

import styled from "styled-components";

import CourseCard from "./CourseCard/CourseCard";
import Space from "@/common/components/Space";

import { QueryClient, useQuery } from "@tanstack/react-query";
import { getCourses } from "../../_api/getCourse";
import { maxLoadCount } from "@/constants/maxLoadCount";
import { useSearchKeywordStore } from "@/store/useSearchKeywordStore";
import { useSelectedChipsStore } from "@/store/useSelectedChipsStore";
import { useCurrentPageStore } from "@/store/useCurrentPageStore";
import PageNavigation from "@/common/components/PageNavigation";
import CourseCardEmpty from "./CourseCardEmtpy/CourseCardEmtpy";

const SearchResult = () => {
  const { value: searchKeyword } = useSearchKeywordStore();
  const { value: selectedChips } = useSelectedChipsStore();
  let { value: currentPage } = useCurrentPageStore();

  const offset = currentPage ? maxLoadCount * (currentPage - 1) : 0;

  const updateCourses = getCourses(offset, maxLoadCount, searchKeyword, selectedChips);
  const { data: searchResult } = useQuery({
    queryKey: ['searchKeyword', searchKeyword, 'selectedChips', selectedChips, 'offset', offset, 'maxLoadCount', maxLoadCount, 'currentPage', currentPage],
    queryFn: () => updateCourses,
    staleTime: 3600000,
    gcTime: 3600000
  });
  const totalPage = Math.ceil(searchResult?.course_count / 20);

  return (
    <Wrapper>
      <Header>전체 {searchResult ? searchResult?.course_count : '-'}개</Header>
      <Space $rem={0.875} />
      <CourseCards>
        {searchResult?.courses ?
          searchResult?.courses?.map((course: any, i: number) => <CourseCard key={course.id} resultValue={course} />)
          :
          Array.from({ length: maxLoadCount }, (_, index) => (
            <CourseCardEmpty key={`empty-${index}`} />
          ))
        }
      </CourseCards>
      <PageNavigation totalPage={totalPage ? totalPage : 1} />
    </Wrapper>
  );
}

export default SearchResult;

const Wrapper = styled.div`
  margin-top: 0.625rem;
  margin-bottom: 0.875rem;
`
const Header = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  border-bottom: 1px solid rgb(225, 226, 228);

  font-size: 0.75rem;
  font-weight: 600;
 `
const CourseCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  grid-template-rows: auto;
  gap: 1.25rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

