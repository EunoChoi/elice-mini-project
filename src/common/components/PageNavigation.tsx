'use client';

import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import { useState } from "react";
import { SetCurrentPage } from "@/types/Page";


const makePagesArray = (current: number, total: number, range = 5) => {
  const pages = [];
  pages.push(current);
  while (pages.length < range) {
    if (pages.length >= total) break;
    if (pages[0] >= 2) pages.unshift(pages[0] - 1);
    if (pages[pages.length - 1] < total) pages.push(pages[pages.length - 1] + 1);
  }
  return pages;
}

interface Props {
  currentPage: number;
  totalPage: number | undefined;
  setCurrentPage: SetCurrentPage;
}

const PageNavigation = ({ currentPage, totalPage, setCurrentPage }: Props) => {
  const arr = makePagesArray(currentPage, totalPage ? totalPage : 1, 5);

  return (<Wrapper>
    <ArrowButton direction={'L'} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
    <Numbers>
      {arr.map(v =>
        <Button
          key={v}
          onClick={() => {
            setCurrentPage(v);
          }}
          className={v === currentPage ? 'current' : ''}>{v}</Button>)}
    </Numbers>
    <ArrowButton direction={'R'} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
  </Wrapper>);
}

export default PageNavigation;

const Wrapper = styled.div`
  width: 100%;
  height: 24px;

  margin-top: 27px;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  border-radius: 0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;

  color: #999;

  padding : 1px 6px;
  margin: 0 .375rem;
`
const Numbers = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .current{
    background-color: #524fa1;
    color: #fff;
    transition: background-color 0.5s ease;
  }
`