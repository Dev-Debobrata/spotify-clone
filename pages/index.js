import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "../components/center/Center";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <meta
          name="description"
          content="All your favorite songs are listed here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
