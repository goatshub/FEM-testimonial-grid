import { Barlow_Semi_Condensed } from "next/font/google";
import CardGrid from "../components/cardGrid";
import Head from "next/head";
const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <main
      className={`grid min-h-screen place-items-center px-5 py-16 ${barlow.className}`}
    >
      <Head>
        <title>Testimonials Grid</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <CardGrid />
    </main>
  );
}
