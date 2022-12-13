import styled from "styled-components";
import { allSites } from "../lib/sites";

export default function SitesList() {
  const sites = allSites.map((site) => {
    return <li>{site.coordinates}</li>;
  });
  return <ul>{sites}</ul>;
}
