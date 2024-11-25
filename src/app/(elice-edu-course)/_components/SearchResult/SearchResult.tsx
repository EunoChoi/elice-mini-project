'use client';

import styled from "styled-components";

import CourseCard from "./CourseCard/CourseCard";
import Space from "@/common/components/Space";

const SearchResult = ({ result, total }: any) => {


  return (<>
    <Header>전체 {total}개</Header>
    <Space $rem={0.875} />
    <CourseCards>
      {result && result?.map((v: any, i: number) => <CourseCard key={i} resultValue={v} />)}
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

