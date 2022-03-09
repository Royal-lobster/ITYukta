import React from "react";
import { Box, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Image } from "../../elements/Image.tsx";
import NextLink from "next/link";
import { motion } from "framer-motion";
const MotionLinkBox = motion(LinkBox);

export function EventCard({ eventName, eventDescription, eventImage }) {
  return (
    <MotionLinkBox
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ opacity: 0 }}
      bgColor="gray.700"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={eventImage} h="150px" />
      <Box>
        <NextLink
          href={`/events/${eventName.toLowerCase().replace(" ", "-")}`}
          passHref
        >
          <LinkOverlay href="passRef">
            <Heading
              display="flex"
              alignItems="center"
              gap={2}
              px={4}
              py={2}
              bgColor="#0000002a"
              as="h3"
              fontSize="xl"
            >
              <Box
                display="inline-block"
                h="20px"
                w="4px"
                bgColor={`hsl(${Math.floor(Math.random() * 360)}, 50%, 70%)`}
                rounded="full"
              />{" "}
              {eventName}
            </Heading>
          </LinkOverlay>
        </NextLink>
        <Text p={4}>{eventDescription}</Text>
      </Box>
    </MotionLinkBox>
  );
}
