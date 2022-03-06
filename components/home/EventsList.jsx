import { EventCard } from "./EventCard";
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Title from "../../elements/Title.tsx";

function EventsList({ techEventsData, nonTechEventsData }) {
  return (
    <Box mx="auto" p={4} mt={8} maxW="1200px">
      <Title title="Technical Events" />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} mb={8}>
        {techEventsData?.map((event) => (
          <EventCard
            id={event.id}
            eventName={event.Event_Name}
            eventDescription={event.Event_Description}
            eventImage={event.Event_Image}
          />
        ))}
      </SimpleGrid>

      <Title title="Non-Technical Events" />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {nonTechEventsData?.map((event) => (
          <EventCard
            id={event.id}
            eventName={event.Event_Name}
            eventDescription={event.Event_Description}
            eventImage={event.Event_Image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default EventsList;
