import { styled } from "styled-components";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

const ArrowButton = ({ direction, current, total }: { direction: 'L' | 'R', current: number, total: number }) => {
  let isBlur = false;
  const onClick = () => {
    if (direction === 'L') { }
    else { }
  }

  if (direction === 'L' && current === 1 || direction === 'R' && current === total) isBlur = true;

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
  &.blur{color: #999;}
`