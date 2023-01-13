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
        <Header />
        <Introduction />
        <SitesListComp />

        <Legal />
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
