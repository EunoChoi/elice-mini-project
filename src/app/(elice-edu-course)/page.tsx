'use client';

import styled from "styled-components";

//components
import SearchHeader from "./_components/SearchHeader/SearchHeader";

export default function Home() {
  return (
    <Wrapper>
      <SearchHeader />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding : 24px 24px 63px 24px;
  background-color: var(--grey2);
`
