export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Workshops",
    children: [
      {
        label: "Machine Learning with data analytics",
        subLabel: "Work shop on data analytics with help of machine learning",
        href: "/workshops/machine-learning-with-data-analytics",
      },
      {
        label: "App development with IOT",
        subLabel:
          "Work shop on Application development with Internet of Things",
        href: "/workshops/app-development-with-internet-of-things",
      },
    ],
  },
  {
    label: "Technical Events",
    children: [
      {
        label: "Code Kaze",
        subLabel: "Coding competition where you have to code for given problem",
        href: "/events/code-kaze",
      },
      {
        label: "Tech Crack ",
        subLabel: "Technology quiz competition",
        href: "/events/tech-crack",
      },
      {
        label: "The Debugger",
        subLabel: "Code with mistakes is given. the task is to debug it !",
        href: "/events/the-debugger",
      },
      {
        label: "Technion",
        subLabel:
          "Power point presentation event where you can present your ideas on a topic of technology",
        href: "/events/technion",
      },
    ],
  },
  {
    label: "Non Technical Events",
    children: [
      {
        label: "Poster Making",
        subLabel:
          "Poster making competition where you have to make a poster for given topic",
        href: "/events/poster-making",
      },
      {
        label: "Fastest Fingers",
        subLabel:
          "Speed typing competition where you have to type the given text in the given time",
        href: "/events/fastest-fingers",
      },
      {
        label: "Treasure hunt",
        subLabel:
          "Items are scattered around the campus. You have to find them all with your group !",
        href: "/events/treasure-hunt",
      },
      {
        label: "Picture Perfect",
        subLabel:
          "multiple character photos are given and you have to guess movie name",
        href: "/events/picture-perfect",
      },
    ],
  },
];
