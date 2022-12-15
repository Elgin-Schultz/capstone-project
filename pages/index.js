import Head from "next/head";
import Image from "next/image";
import SitesList from "./singlesite/ssindex";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profan</title>
      </Head>
      <h1>
        pro|f<span>a</span>n
      </h1>

      <SitesList />
    </>
  );
}
