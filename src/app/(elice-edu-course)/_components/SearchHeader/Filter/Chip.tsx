'use client';

import styled from "styled-components";

interface Props {
  ChipData: {
    name: string;
    query_key: string;
    query_value: string;
    is_free: boolean;
    enroll_type: number;
  }
}

const Chip = ({ ChipData }: Props) => {
  return (<Wrapper>
    {ChipData.name}
  </Wrapper>);
}

export default Chip;

const Wrapper = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;

  transition: 150ms ease-in-out;
  cursor: pointer;

  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  height: 1.875rem;
  margin: 0.5rem;

  color: var(--greyFont2);
  background-color: var(--grey3);
  border-radius: 1.875rem;
  border: none;

  font-size: 0.875rem;
  font-weight: 300;

  &:hover{
    background-color: var(--grey4);
  }
`