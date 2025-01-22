import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import NetworkStatus from "../../components/network-status/NetworkStatus";

const Layout = () => {
  return (
    <>
      <NetworkStatus />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
