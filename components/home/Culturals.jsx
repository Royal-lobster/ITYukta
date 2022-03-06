import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../../elements/Title.tsx";
import { Image } from "../../elements/Image.tsx";

function Culturals() {
  return (
    <Box position="relative" mx="auto" zIndex="9" p={4} mt={8} maxW="1200px">
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
        <Flex
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
              Dancing
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, maiores cumque voluptatibus quos, odit sunt non earum
              eligendi impedit quis sapiente necessitatibus esse culpa soluta id
              assumenda aut commodi quasi sint vero voluptates! Sequi architecto
              fugit, cumque deleniti beatae quaerat!
            </Text>
          </Box>
        </Flex>
        {/* SINGING */}
        <Flex
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
              Singing
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
        </Flex>
      </Flex>
    </Box>
  );
}

export default Culturals;
