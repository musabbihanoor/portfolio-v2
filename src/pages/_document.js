import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Musabbiha Noor</title>
        <meta name="description" content="Frontend dev portfolio." />
        <meta
          name="keywords"
          content="Musabbiha, Frontend, Web, React, Angular"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
