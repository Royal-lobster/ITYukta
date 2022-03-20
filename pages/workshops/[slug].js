import React from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  Badge,
  Table,
  Tbody,
  Button,
  Avatar,
  Tr,
  Td,
  TableCaption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaQrcode } from "react-icons/fa";
import QRCode from "qrcode.react";
import Title from "../../elements/Title.tsx";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const getStaticPaths = async () => {
  // FETCH ALL WORKSHOPS
  const r = await fetch(`${process.env.BACKEND_URL}/items/Workshop`);
  const workshopsData = await r.json();

  // GET ALL SLUGS
  const paths = workshopsData.data.map((workshop) => ({
    params: {
      slug: workshop.Workshop_Name.toLowerCase().replace(/ /g, "-"),
    },
  }));

  // RETURN PATHS
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  // CONVERT WORKSHOP NAME FROM SLUG
  function capitalize(string) {
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }

  const workshopName = capitalize(params.slug.replace(/-/g, " "));

  // FETCH Workshop
  const r = await fetch(
    `${process.env.BACKEND_URL}/items/Workshop?filter[Workshop_Name][_eq]=${workshopName}`
  );
  const workshopData = await r.json();

  // APPEND BOTH DATA Workshop_Image with PROCESS.ENV.BACKEND_URL/assets/
  workshopData.data.forEach((Workshop) => {
    workshopData.data[0].Workshop_Image = `${process.env.BACKEND_URL}/assets/${Workshop.Workshop_Image}`;
    workshopData.data[0].Workshop_Instructor_Image = `${process.env.BACKEND_URL}/assets/${Workshop.Workshop_Instructor_Image}`;
  });

  // Return the props
  return { props: { workshopData: workshopData.data[0] } };
};

function WorkshopPage({ workshopData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bgColor="gray.600"
            borderTopStartRadius="md"
            borderTopEndRadius="md"
            borderBottomWidth="1px"
            borderColor="gray.600"
          >
            QR Code
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" justify="center" py={8}>
              <QRCode
                value={workshopData.Workshop_Registration_URL || "it's empty"}
                fgColor="#ffffff"
                bgColor="#2d3748"
                size={150}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <NextLink href={workshopData.Workshop_Registration_URL || "/"}>
              <Button>Open Link</Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Flex
          align="center"
          justify="center"
          gap={4}
          flexDirection="column"
          minH="250px"
          bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%233ea06f' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`}
          p={{ base: 8, lg: 24 }}
          bgColor="green.600"
        >
          <VStack flex="2">
            <Badge fontSize={{ base: "sm", lg: "xl" }}>Workshop</Badge>
            <Heading
              textAlign="center"
              maxW="800px"
              mt={2}
              fontSize={{ base: "3xl", lg: "5xl" }}
            >
              {workshopData.Workshop_Name}
            </Heading>
            <Text
              textAlign="center"
              maxW="500px"
              mt={2}
              fontSize={{ base: "md", lg: "lg" }}
            >
              {workshopData.Workshop_Description}
            </Text>
            <VStack spacing={"0"}>
              <Avatar
                name={workshopData.Workshop_Instructor}
                src={workshopData.Workshop_Instructor_Image}
              />
              <VStack spacing={"0"}>
                <Text fontSize="lg" fontWeight="bold">
                  {workshopData.Workshop_Instructor}
                </Text>
                <Text textAlign="center" fontSize="sm">
                  {workshopData.Workshop_Instructor_Designation}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          maxW="1200px"
          mx="auto"
          gap={8}
          p={4}
          align="start"
          justify="space-between"
          mt={8}
        >
          <Box flex="1">
            <Title title="Workshop Details" />
            <Text fontSize="md" mt={4} mb={8}>
              {workshopData.Workshop_Content
                ? workshopData.Workshop_Content
                : `No content available for ${workshopData.Workshop_Name}`}
            </Text>
            <Title title="Registration" />
            <Text fontSize="md" mt={4}>
              Click the button below to register for this Workshop. You will be
              directed to google form to fill in your details.
            </Text>
            <ButtonGroup mt={4} size="lg" isAttached variant="outline">
              <NextLink href={workshopData.Workshop_Registration_Link || "/"}>
                <Button
                  colorScheme="green"
                  leftIcon={<ExternalLinkIcon />}
                  mr="-px"
                >
                  Register
                </Button>
              </NextLink>
              <IconButton
                colorScheme="green"
                aria-label="Open QR Code"
                onClick={onOpen}
                icon={<FaQrcode />}
              />
            </ButtonGroup>
          </Box>
          <Box flex="1">
            <Table variant="simple">
              <TableCaption>Workshop Details</TableCaption>
              <Tbody>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Workshop Name
                  </Td>
                  <Td>{workshopData.Workshop_Name}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Instructor
                  </Td>
                  <Td>{workshopData.Workshop_Instructor}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Venue
                  </Td>
                  <Td>Jawaharlal Nehru Technological University Gurajada</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Date
                  </Td>
                  <Td>
                    {workshopData.Workshop_Date
                      ? workshopData.Workshop_Date
                      : "30th - 31st March"}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Entry Fee
                  </Td>
                  <Td>Free</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Registration Fee
                  </Td>
                  <Td>
                    {workshopData.Workshop_Fee
                      ? `Rs. ${workshopData.Workshop_Fee}`
                      : "Free"}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default WorkshopPage;
