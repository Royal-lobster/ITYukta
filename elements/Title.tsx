import React from "react";
import { Heading, Box } from "@chakra-ui/react";
function Title({ title }: { title: string }) {
  return (
    <>
      <Heading mb={2} fontSize="3xl">
        {title}
      </Heading>
      <Box w="80px" h="4px" rounded="full" bgColor="green.300" mb={4} />
    </>
  );
}

export default Title;
