'use client';

import styled from "styled-components";

import CourseCard from "./CourseCard/CourseCard";
import Space from "@/common/components/Space";

import { Result } from "@/types/Result";

interface Props {
  result: Result | undefined;
}

const SearchResult = ({ result }: Props) => {
  return (<Wrapper>
    <Header>전체 {result ? result?.totalCourse : '0'}개</Header>
    <Space $rem={0.875} />
    <CourseCards>
      {result?.resultCourses && result?.resultCourses
        ?.map((course: any, i: number) => <CourseCard key={course.id} resultValue={course} />)}
    </CourseCards>
  </Wrapper>);
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

