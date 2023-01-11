import Head from "next/head";
import Header from "../components/header";
import Image from "next/image";
import Introduction from "../components/introduction";
import SitesListComp from "../components/siteslistComp";
import Legal from "../components/legal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <Header />
      <Introduction />
      <SitesListComp />
      <Legal />
    </>
  );
}
