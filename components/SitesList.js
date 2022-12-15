import styled from "styled-components";
import { allSites } from "../lib/sites";

export default function SitesList() {
  const sites = allSites.map((site) => {
    return (
      <li>
        <mark>{site.pos[0] + " | " + site.pos[1]}</mark>
      </li>
    );
  });

  return <ul>{sites}</ul>;
}
