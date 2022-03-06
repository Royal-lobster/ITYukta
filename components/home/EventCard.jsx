import React from "react";
import { Box, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Image } from "../../elements/Image.tsx";
import NextLink from "next/link";
export function EventCard({ eventName, eventDescription, eventImage }) {
  return (
    <LinkBox bgColor="gray.700" borderRadius="md" overflow="hidden">
      <Image src={eventImage} h="100px" />
      <Box p={4}>
        <NextLink
          href={`/events/${eventName.toLowerCase().replace(" ", "-")}`}
          passHref
        >
          <LinkOverlay href="passRef">
            <Heading as="h3" fontSize="xl">
              {eventName}
            </Heading>
          </LinkOverlay>
        </NextLink>
        <Text
          bgColor="#0000002a"
          borderLeftWidth={2}
          borderColor="green.300"
          p={2}
          mt={2}
        >
          {eventDescription}
        </Text>
      </Box>
    </LinkBox>
  );
}
