import React, { useState, useRef, useEffect } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import NET from "vanta/dist/vanta.net.min.js";
import Script from "next/script";
import Typist from "react-typist";

function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vanta = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vanta.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#38a169",
          backgroundColor: "#1a202c",
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
      ></Script>

      <VStack bgColor="gray.800" flex="1" h="450px" ref={vanta}>
        <Heading
          textAlign="center"
          pt="20vh"
          fontFamily="ITYukta"
          fontSize={{ base: "50px", lg: "80px" }}
          className="hero-text"
        >
          <Typist avgTypingDelay={100} cursor={{ show: false }}>
            IT Yukta 2K22
          </Typist>
        </Heading>
        <Text fontSize="30px" bgColor="green.400" fontWeight="bold" px={2}>
          Technical Symposium
        </Text>
      </VStack>
    </>
  );
}

export default Hero;
