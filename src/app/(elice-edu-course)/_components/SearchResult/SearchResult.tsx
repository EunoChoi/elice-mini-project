'use client';

import styled from "styled-components";

import { dummyClass } from "@/constants/dummyClass";
import CourseCard from "./CourseCard/CourseCard";
import Space from "@/common/components/Space";

const SearchResult = () => {


  return (<>
    <Header>전체 {0}개</Header>
    <Space $rem={0.875} />
    <CourseCards>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </CourseCards>
  </>);
}

export default SearchResult;

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

