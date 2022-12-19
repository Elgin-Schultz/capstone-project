import Link from "next/link";
import Header from "../../components/header";
import styled from "styled-components";
import { allSites } from "../../lib/sites";

export default function SitesList() {
  return (
    <>
      <Header />
      <ul>
        {allSites.map((site) => (
          <li key={site.slug}>
            <Link href={`/singlesite/${site.slug}`}>
              <mark>{site.coordinates[0] + " | " + site.coordinates[1]}</mark>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
