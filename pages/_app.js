import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import ScrollToTop from "react-scroll-to-top";
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>IT Yukta 2K22 Fest</title>
        <meta
          name="description"
          content="IT Yukta 2022 is a National Level Technical Symposium conducted by JNTUG Vizianagaram of Information Technology department"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://ityukta.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IT Yukta 2K22 Fest" />
        <meta
          property="og:description"
          content="IT Yukta 2022 is a National Level Technical Symposium conducted by JNTUG Vizianagaram of Information Technology department"
        />
        <meta property="og:image" content="https://i.imgur.com/d8aht77.png" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ityukta.org" />
        <meta property="twitter:url" content="https://ityukta.org/" />
        <meta name="twitter:title" content="IT Yukta 2K22 Fest" />
        <meta
          name="twitter:description"
          content="IT Yukta 2022 is a National Level Technical Symposium conducted by JNTUG Vizianagaram of Information Technology department"
        />
        <meta name="twitter:image" content="https://i.imgur.com/d8aht77.png" />

        {/* <!-- CSS Links --> */}
        <link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
      </Head>
      <ScrollToTop
        width={20}
        height={20}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4a5568",
          boxShadow: "none",
        }}
        smooth
        color="#48bb78"
      />
      <ChakraProvider>
        <div id="page-container">
          <Navbar />
          <div id="content-wrap">
            <Component {...pageProps} />
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </ChakraProvider>

      <style jsx>{`
        #page-container {
          position: relative;
          min-height: 100vh;
        }
        #content-wrap {
          margin-top: 60px;
          padding-bottom: 98px;
          overflow-x: hidden;
        }
        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 98px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
