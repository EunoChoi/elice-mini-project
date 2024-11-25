'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";

import { ChipValue } from "@/types/Chip";
import { useSelectedChipsStore } from "@/store/useSelectedChipsStore";

interface Props {
  chipValue: ChipValue;
}

const Chip = ({ chipValue }: Props) => {

  const { value: selectedChips, setValue: setSelectedChips } = useSelectedChipsStore();


  const [isClicked, setIsClicked] = useState(() => {
    if (selectedChips?.findIndex(v => v.name === chipValue.name) === -1) return false;
    else return true;
  });


  const onClick = () => {
    if (selectedChips?.findIndex(v => v.name === chipValue.name) === -1) {
      setSelectedChips([...selectedChips, chipValue]);
      setIsClicked(true);
    }
    else {
      const rest = selectedChips.filter(v => v.name !== chipValue.name);
      setSelectedChips(rest);
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (selectedChips?.findIndex(v => v.name === chipValue.name) === -1) setIsClicked(false);
    else setIsClicked(true);
  }, [selectedChips])

  return (<Wrapper onClick={onClick} $isClicked={isClicked}>{chipValue.name}</Wrapper>);
}

export default Chip;

const Wrapper = styled.button<{ $isClicked?: boolean }>`
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