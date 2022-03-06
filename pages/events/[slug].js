import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  // FETCH ALL EVENTS
  const r = await fetch(`${process.env.BACKEND_URL}/items/Event`);
  const eventsData = await r.json();

  // GET ALL SLUGS
  const paths = eventsData.data.map((event) => ({
    params: {
      slug: event.Event_Name.toLowerCase().replace(" ", "-"),
    },
  }));

  // RETURN PATHS
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  // CONVERT EVENT NAME FROM SLUG
  function capitalize(string) {
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }

  const eventName = capitalize(params.slug.replace("-", " "));
  console.log(eventName);

  // FETCH EVENT
  const r = await fetch(
    `${process.env.BACKEND_URL}/items/Event?filter[Event_Name][_eq]=${eventName}`
  );
  const eventData = await r.json();

  // APPEND BOTH DATA Event_Image with PROCESS.ENV.BACKEND_URL/assets/
  eventData.data.forEach((event) => {
    eventData.data[0].Event_Image = `${process.env.BACKEND_URL}/assets/${event.Event_Image}`;
  });

  // Return the props
  return { props: { eventData: eventData.data[0] } };
};

function eventPage({ eventData }) {
  return (
    <Box>
      <Heading>{eventData.Event_Name}</Heading>
      <Text>{eventData.Event_Description}</Text>
    </Box>
  );
}

export default eventPage;
