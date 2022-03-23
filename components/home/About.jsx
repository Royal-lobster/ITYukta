import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../../elements/Title.tsx";
function About() {
  return (
    <Box mx="auto" p={4} mt={8} maxW="1200px">
      <Title title="About IT Yukta" />
      <Text fontSize={{ base: "md", lg: "lg" }} mb={4}>
      The tenth National Level Technical Symposium is going to be conducted at a grand level which includes several most advanced technical workshops and events to enhance their skills also there are some dazzling performances by our youngsters at this event. We are going to embrace the present technological advancement. So we the youngsters of the new technical era promise you, that this two day technical event is worth your time as you are going to enhance your technical skill, test your knowledge resources and can have a blast during the culturals. Our IT YUKTA is a mix of knowledge and entertainment. So Please do join us on 30th & 31st of March 2022.
      </Text>
    </Box>
  );
}

export default About;
