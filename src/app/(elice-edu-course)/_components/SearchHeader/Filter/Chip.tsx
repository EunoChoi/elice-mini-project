'use client';

import { useState } from "react";
import styled from "styled-components";

interface ChipData {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

interface Props {
  chipValue: ChipData;
  chips: ChipData[];
  setChips: (c: ChipData[]) => void;
}

const Chip = ({ chipValue, chips, setChips }: Props) => {

  const [isClicked, setIsClicked] = useState(
    () => {
      if (chips.findIndex(v => v.name === chipValue.name) === -1) {
        return false;
      }
      else return true;
    }
  );

  const onClick = () => {
    if (chips.findIndex(v => v.name === chipValue.name) === -1) {
      setChips([...chips, chipValue]);
      setIsClicked(true);
    }
    else {
      const temp = chips.filter(v => v.name !== chipValue.name);
      setChips(temp);
      setIsClicked(false);
    }
  };

  return (<Wrapper onClick={onClick} $isClicked={isClicked}>
    {chipValue.name}
  </Wrapper>);
}

export default Chip;

const Wrapper = styled.button<{ $isClicked: boolean }>`
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

  background-color: ${(props) => props.$isClicked ? 'var(--elice-violet2)' : 'var(--grey3)'};
  color: ${(props) => props.$isClicked ? 'var(--white)' : 'var(--greyFont2)'};

  &:hover{
    background-color: var(--grey4);
    background-color: ${(props) => props.$isClicked ? 'var(--elice-violet2)' : 'var(--grey3)'};
  }
`