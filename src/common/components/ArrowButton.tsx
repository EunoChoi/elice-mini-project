import { styled } from "styled-components";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

import { useCurrentPageStore } from "@/store/useCurrentPageStore";
import { useEffect, useState } from "react";

interface Props {
  direction: 'L' | 'R';
  totalPage: number;
}

const ArrowButton = ({ direction, totalPage }: Props) => {

  const [isBlur, setIsBlur] = useState(false);

  const currentPage = useCurrentPageStore();
  const currentPageValue = currentPage.value ? currentPage.value : 1;
  const setCurrentPage = currentPage.setValue;

  const onClick = () => {
    if (direction === 'L' && currentPageValue > 1) { setCurrentPage(currentPageValue - 1) }
    else if (direction === 'R' && currentPageValue < totalPage) setCurrentPage(currentPageValue + 1)
  }

  useEffect(() => {
    if (direction === 'L' && currentPageValue === 1 || direction === 'R' && currentPageValue === Math.ceil(totalPage)) setIsBlur(true);
    else setIsBlur(false);
  }, [currentPageValue])


  return <Button onClick={onClick} className={isBlur ? 'arrow blur' : 'arrow'}>
    {direction === 'L' ?
      <LeftArrowIcon width={24} height={24}></LeftArrowIcon> :
      <RightArrowIcon width={24} height={24}></RightArrowIcon>}
  </Button>
}

export default ArrowButton;

const Button = styled.button`
  border-radius: 0.25rem;
  height: 1.5rem;
  width: auto;
  text-align: center;

  padding : 1px 6px;
  margin: 0;
  transform: scale(0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  color: #222;
  &.blur{
    color: #999;
    cursor: not-allowed;
  }
`