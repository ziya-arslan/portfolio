import { Footer, Header } from "@sections";
import Head from "next/head";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Ziya Arslan</title>
        {/* TODO: Add meta tags */}
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
