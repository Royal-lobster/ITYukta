import React from "react";
import {
  HStack,
  VStack,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Image } from "../../elements/Image.tsx";
import NextLink from "next/link";
import { motion } from "framer-motion";
const MotionLinkBox = motion(LinkBox);

export function WorkshopCard({
  workshopName,
  WorkshopInstructor,
  WorkshopInstructorImage,
  WorkshopInstructorDesignation,
  workshopImage,
}) {
  return (
    <MotionLinkBox
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ opacity: 0 }}
      overflow="hidden"
      bgColor="gray.700"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
      borderRadius="md"
    >
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Image
          src={workshopImage}
          h="160px"
          w={{ base: "unset", lg: "300px" }}
        />
        <Box p={4}>
          <NextLink
            href={`/workshops/${workshopName.toLowerCase().replace(/ /g, "-")}`}
            passHref
          >
            <LinkOverlay href="passRef">
              <Heading as="h3" fontSize="xl">
                {workshopName}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <HStack spacing={2} mt={4}>
            <Avatar
              variant=""
              name={WorkshopInstructor}
              src={WorkshopInstructorImage}
            />
            <VStack align="left" spacing={"0"}>
              <Text fontSize="lg" fontWeight="bold">
                {WorkshopInstructor}
              </Text>
              <Text fontSize="sm">{WorkshopInstructorDesignation}</Text>
            </VStack>
          </HStack>
        </Box>
      </Flex>
    </MotionLinkBox>
  );
}
