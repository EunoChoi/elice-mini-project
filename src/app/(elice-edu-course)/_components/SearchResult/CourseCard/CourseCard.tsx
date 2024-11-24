'use client';

import { dummyClass } from "@/constants/dummyClass";
import Image from "next/image";
import styled from "styled-components";

import { makeWon } from "@/common/functions/makeWon";
import DiscountedPrice from "./DiscountedPrice";

const CourseCard = () => {

  const tags = dummyClass.tags
    .filter((v: { tag_type: number, id: number }) => v.tag_type === 3).map(
      (v) => {
        if (v.id === 12) return '프로그래밍 기초';
        if (v.id === 13) return '데이터 분석';
        if (v.id === 14) return '웹';
        if (v.id === 22) return '인공지능';
        if (v.id === 23) return '알고리즘';
      }
    );
  return (<Wrapper>
    <CourseImg src={dummyClass.image_file_url} width={300} height={300} alt={`${dummyClass.title}`} />
    <CourseText>
      <div>
        {tags.length === 0 ?
          <Tag>미분류</Tag> :
          <>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</>
        }
      </div>
      <div className="title">{dummyClass.title}</div>
      <div className="description">{dummyClass.short_description}</div>
    </CourseText>
    <CoursePrice>
      {dummyClass.is_free && <Free>무료</Free>}
      {dummyClass.is_discounted &&
        <DiscountedPrice
          price={Number(dummyClass.price)}
          discountedPrice={Number(dummyClass.discounted_price)}
          discountRate={Number(dummyClass.discount_rate)}
        />}
      {!dummyClass.is_discounted && <>{makeWon(Number(dummyClass.price))}</>}
    </CoursePrice>
  </Wrapper>);
}

export default CourseCard;

const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  min-height: 389px;

  display : flex;
  flex-direction: column;

  background-color: var(--white);
  border: 1px solid rgba(225, 226, 228, 0.75);
  border-radius: 8px;
  overflow: hidden;
`
const CourseImg = styled(Image)`
  width: 100%;
  height: 145px;
  object-fit: cover;
`
const CourseText = styled.div`
  flex-grow: 1;
  padding: 1.25rem;

  .title{
    color: #222;
    font-size: 1rem;
    font-weight: 700;

    line-height: 120%;
    margin: 9px 0;
  }
  .description{
    color: #5e5f61;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1.6;

    max-height: 3.2em;
    display: -webkit-box;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const Tag = styled.span`
  color: rgb(82, 79, 161);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.6;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child)::after {
    content: ", ";
  }
`
const CoursePrice = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  align-items: end;
  
  font-size: 1rem;
  font-weight: 700;

  padding: 0px 1.25rem 1.25rem;
  span{margin-right: 10px;}
`
const Free = styled.span`
  color: #00ab53;
`