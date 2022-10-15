import { useState } from "react";
import Head from "next/head";
import CommonContext from "../contexts/common.context";

export default function Home() {
  const [common, setCommonContext] = useState({
    showTray: false,
    selectedNavItem: null,
  });

  return (
    <CommonContext.Provider value={{ common, setCommonContext }}>
      <Head>
        <title>minifig - Create the coolest avatar.</title>
        <meta
          name="description"
          content="minifig - Create the coolest avatar."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen sticky top-0"></div>
    </CommonContext.Provider>
  );
}
