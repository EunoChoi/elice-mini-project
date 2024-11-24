import { makeWon } from "@/common/functions/makeWon";
import styled from "styled-components";

interface Props {
  discountedPrice: number;
  price: number;
  discountRate: number;
}

const DiscountedPrice = ({ discountedPrice, price, discountRate }: Props) => {
  return (
    <Wrapper>
      <Price>{makeWon(discountedPrice)}</Price>
      <div>
        <OriginPrice>{makeWon(price)}</OriginPrice>
        <DiscountRatePrice>{discountRate * 100 + '%'}</DiscountRatePrice>
      </div>
    </Wrapper>
  );
}

export default DiscountedPrice;

const Wrapper = styled.div`
  width: 100%;
  display :flex;
  align-items: center;
  div{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`
const OriginPrice = styled.span`
  font-size: 0.875rem;
  color: var(--greyFont);
  text-decoration: line-through;
  font-weight: 300;
`
const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #222;
`
const DiscountRatePrice = styled.span`
  font-size: .875rem;
  color: #fa466a;
`