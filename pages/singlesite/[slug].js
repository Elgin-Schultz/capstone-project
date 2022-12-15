import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { allSites } from "../../lib/sites";

export default function singleSite() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentSite = allSites.find((site) => site.slug === slug);
  if (!currentSite) {
    return <p>Hier gibt es leider nichts zu entdecken ...</p>;
  }
}
