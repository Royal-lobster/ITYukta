import React from "react";
import About from "../components/home/About.jsx";
import Culturals from "../components/home/Culturals.jsx";
import EventsList from "../components/home/EventsList.jsx";
import Hero from "../components/home/Hero.jsx";
import PoweredBy from "../components/home/PoweredBy.jsx";
import WorkshopList from "../components/home/WorkshopList.jsx";

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

  // FETCH WORKSHOPS
  const r3 = await fetch(`${process.env.BACKEND_URL}/items/Workshop`);
  const workshopData = await r3.json();

  // APPEND Images with PROCESS.ENV.BACKEND_URL/assets/
  techEventsData.data.forEach((event) => {
    event.Event_Image = `${process.env.BACKEND_URL}/assets/${event.Event_Image}`;
  });
  nonTechEventsData.data.forEach((event) => {
    event.Event_Image = `${process.env.BACKEND_URL}/assets/${event.Event_Image}`;
  });
  workshopData.data.forEach((workshop) => {
    workshop.Workshop_Image = `${process.env.BACKEND_URL}/assets/${workshop.Workshop_Image}`;
    workshop.Workshop_Instructor_Image = `${process.env.BACKEND_URL}/assets/${workshop.Workshop_Instructor_Image}`;
  });

  return {
    props: {
      techEventsData: techEventsData.data,
      nonTechEventsData: nonTechEventsData.data,
      workshopData: workshopData.data,
    },
  };
}

function index({ techEventsData, nonTechEventsData, workshopData }) {
  return (
    <>
      <Hero />
      <PoweredBy />
      <About />
      <WorkshopList workshopData={workshopData} />
      <EventsList
        techEventsData={techEventsData}
        nonTechEventsData={nonTechEventsData}
      />
      <Culturals />
    </>
  );
}

export default index;
