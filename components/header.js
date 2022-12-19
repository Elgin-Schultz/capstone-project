import styled from "styled-components";

export default function Header() {
  return (
    <h1>
      pro|f<StyledSpan>a</StyledSpan>n
    </h1>
  );
}
const StyledSpan = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 10%;
`;
