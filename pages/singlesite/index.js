import Link from "next/link";
import styled from "styled-components";
import { allSites } from "../../lib/sites";

export default function SitesList() {
  return (
    <>
      <h1>
        pro|f<span>a</span>n
      </h1>
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
