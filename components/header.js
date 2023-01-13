import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeadline1>
      pro|f<StyledSpan>a</StyledSpan>n
    </StyledHeadline1>
  );
}
const StyledSpan = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 10%;
`;
const StyledHeadline1 = styled.h1`
  display: inline;
  background-color: white;
`;
