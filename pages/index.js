import Head from "next/head";
import SitesList from "../components/SitesList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <h1>Profan</h1>

      <SitesList />
    </>
  );
}
