import Link from "next/link";
import { allSites } from "../lib/data-sites";
import styled from "styled-components";

export default function SitesListComp() {
  return (
    <ul>
      {allSites.map((site) => (
        <li key={site.slug}>
          <Link href={`/singlesite/${site.slug}`}>
            <StyledSpan>
              {site.coordinates[0] + " | " + site.coordinates[1]}
            </StyledSpan>
          </Link>
        </li>
      ))}
    </ul>
  );
}
const StyledSpan = styled.span`
  background-color: rosybrown;
`;
