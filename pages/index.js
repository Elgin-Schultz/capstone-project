import Head from "next/head";
import Header from "../components/header";
import Image from "next/image";
import Introduction from "../components/introduction";
import SitesList from "./singlesite/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <Header />
      <Introduction />
      <SitesList />
    </>
  );
}
