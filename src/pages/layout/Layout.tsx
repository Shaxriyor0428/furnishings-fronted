import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NetworkStatus from "@/components/network-status/NetworkStatus";
import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <NetworkStatus />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default React.memo(Layout);
