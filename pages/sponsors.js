import { Flex, Heading, Box, Text, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { Image } from "../elements/Image.tsx";

function sponsors() {
  return (
    <Box>
      <Flex h="15vh" bgColor="green.600" p={12} justify="center" align="center">
        <Heading>Sponsors</Heading>
      </Flex>
      <Text
        mt={8}
        align="center"
        borderBottomWidth="1px"
        borderColor="gray.600"
        maxW="800px"
        mx="auto"
        pb={4}
        px={4}
        fontSize="20px"
      >
        A big thank you to all our sponsors for making this event possible.
      </Text>

      <SimpleGrid
        maxW="1200px"
        mx="auto"
        columns={[1, 1, 2, 3]}
        spacing={8}
        px={4}
        mt={8}
      >
        <img src="/sponsors/colors.jpeg" />
        <img src="/sponsors/for-someone-special.jpeg" />
        <img src="/sponsors/prasad-akula.jpeg" />
      </SimpleGrid>
    </Box>
  );
}

export default sponsors;
