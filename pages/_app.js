import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import Head from "next/head";

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
      </Head>
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
