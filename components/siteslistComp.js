import Link from "next/link";
import { allSites } from "../lib/sites";

export default function SitesListComp() {
  return (
    <ul>
      {allSites.map((site) => (
        <li class="siteslist" key={site.slug}>
          <Link href={`/singlesite/${site.slug}`}>
            <span className="mark">
              {site.coordinates[0] + " | " + site.coordinates[1]}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
