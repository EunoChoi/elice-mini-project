'use client';
import styled from "styled-components";

const CourseCardEmpty = () => {
  return (
    <Wrapper>
      <CourseImg />
      <CourseText>
        <div className="title"></div>
        <div className="description"></div>
        <div className="description"></div>
      </CourseText>
      <CoursePrice>
      </CoursePrice>
    </Wrapper>);
}

export default CourseCardEmpty;

const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  min-height: 389px;

  display : flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--white);
  border: 1px solid rgba(225, 226, 228, 0.75);
  border-radius: 8px;
  overflow: hidden;
`
const CourseImg = styled.div`
  width: 100%;
  height: 145px;

  background-color: var(--grey4);
`
const CourseText = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 1.25rem;
  .title{
    border-radius: 0.5rem;
    height: 32px;
    width: 35%;
    background-color: var(--grey2);
  }
  .description{
    border-radius: 0.5rem;
    height: 24px;
    background-color: var(--grey2);
  }
  .description{
    border-radius: 0.5rem;
    height: 24px;
    background-color: var(--grey2);
  }
  *{
    margin-bottom: 8px;
  }
`
const CoursePrice = styled.div`
  width: calc(100% - 2.5em);
  height: 48px;
  border-radius: 0.5rem;
  background-color: var(--grey3);
  margin-bottom: 1.5rem;
`