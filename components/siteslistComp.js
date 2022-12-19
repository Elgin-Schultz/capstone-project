import Link from "next/link";
import { allSites } from "../lib/sites";

export default function SitesListComp() {
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
}
