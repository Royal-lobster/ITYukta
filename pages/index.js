import React from "react";
import About from "../components/home/About.jsx";
import EventsList from "../components/home/EventsList.jsx";
import Hero from "../components/home/Hero.jsx";
import PoweredBy from "../components/home/PoweredBy.jsx";

export async function getStaticProps() {
  // FETCH TECHNICAL EVENTS
  const r1 = await fetch(
    `${process.env.BACKEND_URL}/items/Event?filter[Event_Type][_eq]=Technical%20Event`
  );
  const techEventsData = await r1.json();

  // FETCH NON TECHNICAL EVENTS
  const r2 = await fetch(
    `${process.env.BACKEND_URL}/items/Event?filter[Event_Type][_eq]=Non%20Technical%20Event`
  );
  const nonTechEventsData = await r2.json();

  // APPEND BOTH DATA Event_Image with PROCESS.ENV.BACKEND_URL/assets/
  techEventsData.data.forEach((event) => {
    event.Event_Image = `${process.env.BACKEND_URL}/assets/${event.Event_Image}`;
  });
  nonTechEventsData.data.forEach((event) => {
    event.Event_Image = `${process.env.BACKEND_URL}/assets/${event.Event_Image}`;
  });

  return {
    props: {
      techEventsData: techEventsData.data,
      nonTechEventsData: nonTechEventsData.data,
    },
  };
}

function index({ techEventsData, nonTechEventsData }) {
  console.log(nonTechEventsData);
  return (
    <>
      <Hero />
      <About />
      <PoweredBy />
      <EventsList
        techEventsData={techEventsData}
        nonTechEventsData={nonTechEventsData}
      />
    </>
  );
}

export default index;
