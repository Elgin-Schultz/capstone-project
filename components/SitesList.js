import styled from "styled-components";
import { allSites } from "../lib/sites";

export default function SitesList() {
  const sites = allSites.map((site) => {
    return (
      <li>
        <mark>{site.coordinates[0] + " | " + site.coordinates[1]}</mark>
      </li>
    );
  });

  return <ul>{sites}</ul>;
}
