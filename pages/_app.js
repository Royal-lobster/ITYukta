import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
