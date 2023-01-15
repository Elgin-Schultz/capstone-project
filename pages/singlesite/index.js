import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/header";
import Popup from "../../components/legal";
import Legal from "../../components/legal";
import SitesListComp from "../../components/siteslistComp";
import Image from "next/image";
import { findByLabelText } from "@testing-library/react";

export default function SitesList() {
  return (
    <StyledDiv>
      <StyledDiv2>
        <Header />
      </StyledDiv2>
      <StyledDiv3>
        <SitesListComp />
      </StyledDiv3>
      <StyledDiv4>
        <Legal />
      </StyledDiv4>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5fr;
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
  position: absolute;
  bottom: 0rem;
  right: 0rem;
`;
/*export default function SitesList() {
  return (
    <ul>
      {allSites.map((site) => (
        <li key={site.slug}>
          <Link href={`/singlesite/${site.slug}`}>
            <mark>{site.coordinates[0] + " | " + site.coordinates[1]}</mark>
          </Link>
        </li>
      ))}
    </ul>
  );
}*/
