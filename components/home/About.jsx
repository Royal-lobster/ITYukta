import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../../elements/Title.tsx";
function About() {
  return (
    <Box mx="auto" p={4} mt={8} maxW="1200px">
      <Title title="About IT Yukta" />
      <Text fontSize={{ base: "md", lg: "lg" }} mb={4}>
      The two National Level Technical Symposium is going to be conducted at a grand level which includes several most advanced technical workshops and events to enhance their skills also there are going to dazzling performances by our youngsters at cultures. We are going to push the very boundaries of present technological advancement. So we the youngsters of the new technical era promise you to that this two day technical event is worth your time as you are going to enhance your technical skill, test your knowledge resources and can have a blast during the culturals. Please do join us on 30&31st of this month.
      </Text>
    </Box>
  );
}

export default About;
