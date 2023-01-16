import Head from "next/head";
import Header from "../components/header";
import Image from "next/image";
import Introduction from "../components/introduction";
import SitesListComp from "../components/siteslistComp";
import Legal from "../components/legal";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <StyledDiv>
        <StyledDiv2>
          <Header />
        </StyledDiv2>
        <StyledDiv3>
          <Introduction />
        </StyledDiv3>
        <StyledDiv4>
          <SitesListComp />
        </StyledDiv4>
        <StyledDiv5>
          <Legal />
        </StyledDiv5>
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  display: grid;
  gap: 0.125rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto 5fr;
  align-items: end;
`;

const StyledDiv2 = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
`;

const StyledDiv3 = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
`;

const StyledDiv4 = styled.div`
  grid-column: 1/2;
`;

const StyledDiv5 = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
`;
