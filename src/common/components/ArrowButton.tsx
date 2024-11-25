import { styled } from "styled-components";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import { SetCurrentPage } from "@/types/Page";

interface Props {
  direction: 'L' | 'R';
  currentPage: number;
  totalPage: number | undefined;
  setCurrentPage: SetCurrentPage;
}

const ArrowButton = ({ direction, currentPage, setCurrentPage, totalPage }: Props) => {
  let isBlur = false;
  totalPage = totalPage ? totalPage : 1;

  const onClick = () => {
    if (direction === 'L' && currentPage < 1) { setCurrentPage(currentPage - 1) }
    else if (direction === 'R' && currentPage < totalPage) setCurrentPage(currentPage + 1)
  }

  if (direction === 'L' && currentPage === 1 || direction === 'R' && currentPage === Math.ceil(totalPage)) isBlur = true;

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