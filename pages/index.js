import Head from "next/head";
import Image from "next/image";
import SitesList from "../components/SitesList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <h1>
        pro|f<u>a</u>n
      </h1>

      <SitesList />
    </>
  );
}
