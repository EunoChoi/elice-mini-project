import styled from "styled-components"

const Space = ({ rem }: { rem: number }) => {
  return (<Wrapper rem={rem} />)
}

export default Space;

const Wrapper = styled.div<{ rem: number }>`
  display: block;
  width: 0px;
  height: 0px;
  padding: 0px;
  margin: 0px 0px ${props => props.rem}rem;
`