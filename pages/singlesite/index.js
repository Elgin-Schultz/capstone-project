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
      <Header />
      <SitesListComp />
      <Legal />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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
