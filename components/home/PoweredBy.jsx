import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";

function PoweredBy() {
  return (
    <Box>
      <HStack
        spacing={4}
        align="stretch"
        justify="space-around"
        px={8}
        py={4}
        maxW="min(700px, 90%)"
        borderRadius="md"
        mt={8}
        mx="auto"
        bgColor="gray.600"
      >
        <Flex
          align="center"
          justify="center"
          px={{ base: 2, lg: 4 }}
          borderRightWidth="1px"
          borderRightColor="gray.300"
          bgColor="#0000002a"
          py="lg"
        >
          <Heading
            mb={1}
            fontWeight="100"
            whiteSpace="nowrap"
            fontSize={{ base: "16px", lg: "30px" }}
          >
            Powered By
          </Heading>
        </Flex>
        <Flex align="center" justify="center">
          <Image mx="auto" h="40px" src="/acm-logo.svg" />
        </Flex>
        <Flex align="center" justify="center">
          <Image mx="auto" h="50px" src="/ieee-logo.svg" />
        </Flex>
      </HStack>
    </Box>
  );
}

export default PoweredBy;
