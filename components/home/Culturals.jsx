import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../../elements/Title.tsx";
import { Image } from "../../elements/Image.tsx";
import { motion } from "framer-motion";
const MotionFlex = motion(Flex);

function Culturals() {
  return (
    <Box
      id="culturals"
      style={{ scrollMarginTop: "100px" }}
      position="relative"
      mx="auto"
      zIndex="9"
      p={4}
      mt={8}
      maxW="1200px"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="450px"
        h="450px"
        bg="#0000002a"
        zIndex="-1"
        rounded="full"
      />
      <Title title="Culturals" />
      <Flex gap={8} flexDirection={{ base: "column", sm: "row", md: "column" }}>
        {/* DANCING */}
        <MotionFlex
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ opacity: 0 }}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 12 }}
          mt={8}
        >
          <Image
            flex={{ base: "unset", md: "2" }}
            borderRadius="md"
            overflow="hidden"
            src="/dancing.png"
            h="207px"
          />
          <Box flex={{ base: "unset", md: "3" }}>
            <Heading as="h3" fontSize="3xl" mb={4}>
              Flash Mob
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, maiores cumque voluptatibus quos, odit sunt non earum
              eligendi impedit quis sapiente necessitatibus esse culpa soluta id
              assumenda aut commodi quasi sint vero voluptates! Sequi architecto
              fugit, cumque deleniti beatae quaerat!
            </Text>
          </Box>
        </MotionFlex>
        {/* SINGING */}
        <MotionFlex
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ opacity: 0 }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap={{ base: 4, md: 12 }}
          mt={8}
        >
          <Box flex={{ base: "unset", md: "3" }}>
            <Heading
              textAlign={{ base: "left", md: "right" }}
              as="h3"
              fontSize="3xl"
              mb={4}
            >
              Cultural Night
            </Heading>
            <Text textAlign={{ base: "left", md: "right" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, maiores cumque voluptatibus quos, odit sunt non earum
              eligendi impedit quis sapiente necessitatibus esse culpa soluta id
              assumenda aut commodi quasi sint vero voluptates! Sequi architecto
              fugit, cumque deleniti beatae quaerat!
            </Text>
          </Box>
          <Image
            flex={{ base: "unset", md: "2" }}
            borderRadius="md"
            overflow="hidden"
            src="/singing.png"
            h="207px"
          />
        </MotionFlex>
      </Flex>
    </Box>
  );
}

export default Culturals;
