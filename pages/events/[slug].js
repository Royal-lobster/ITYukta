import React from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  Badge,
  Table,
  Tbody,
  Button,
  Tr,
  Td,
  TableCaption,
  ButtonGroup,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
} from "@chakra-ui/react";
import { Image } from "../../elements/Image.tsx";
import Title from "../../elements/Title.tsx";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AlertIcon } from "@chakra-ui/alert";
import { FaQrcode } from "react-icons/fa";
import QRCode from "qrcode.react";
import NextLink from "next/link";

export const getStaticPaths = async () => {
  // FETCH ALL EVENTS
  const r = await fetch(`${process.env.BACKEND_URL}/items/Event`);
  const eventsData = await r.json();

  // GET ALL SLUGS
  const paths = eventsData.data.map((event) => ({
    params: {
      slug: event.Event_Name.toLowerCase().replace(/ /g, "-"),
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

  const eventName = capitalize(params.slug.replace(/-/g, " "));

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

function EventPage({ eventData }) {
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
                value={eventData.Event_Registration_URL}
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
            <NextLink href={eventData.Event_Registration_URL || "/"}>
              <Button>Open Link</Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box>
        <Flex
          align="center"
          justify="space-between"
          gap={4}
          flexDirection={{ base: "column", lg: "row" }}
          minH="250px"
          bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%233ea06f' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`}
          p={{ base: 8, lg: 24 }}
          bgColor="green.600"
        >
          <Box flex="2">
            <Badge fontSize={{ base: "sm", lg: "xl" }}>
              {eventData.Event_Type}
            </Badge>
            <Heading mt={2} fontSize={{ base: "3xl", lg: "5xl" }}>
              {eventData.Event_Name}
            </Heading>
            <Text maxW="500px" mt={2} fontSize={{ base: "md", lg: "lg" }}>
              {eventData.Event_Description}
            </Text>
          </Box>
          <Box flex="1" position="relative">
            <Image
              src={eventData.Event_Image}
              h="200px"
              w={{ base: "min(85vw, 600px)", lg: "100%" }}
              borderRadius="md"
              overflow="hidden"
            />
          </Box>
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
            <Title title="Event Details" />
            <Text fontSize="md" mt={4} mb={8}>
              {eventData.Event_Content
                ? eventData.Event_Content
                : `No details available for ${eventData.Event_Name}`}
            </Text>
            <Title title="Registration" />
            <Alert status="info" variant="left-accent">
              <AlertIcon />
              Entry fee of 100 INR is required to participate in any event in
              addition to the registration fees of the respective event.
            </Alert>
            <Text fontSize="md" mt={4}>
              Click the button below to register for this event. You will be
              directed to google form to fill in your details.
            </Text>
            <ButtonGroup mt={4} size="lg" isAttached variant="outline">
              <NextLink href={eventData.Event_Registration_URL || "/"}>
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
              <TableCaption>Event Details</TableCaption>
              <Tbody>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Event Name
                  </Td>
                  <Td>{eventData.Event_Name}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Event Description
                  </Td>
                  <Td>{eventData.Event_Description}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Event Type
                  </Td>
                  <Td>{eventData.Event_Type}</Td>
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
                    {eventData.Event_Date
                      ? eventData.Event_Date
                      : "30th - 31st March"}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Payment
                  </Td>
                  <Td>6302950127</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Entry Fee
                  </Td>
                  <Td>Rs. 100</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" color="gray.400">
                    Registration Fee
                  </Td>
                  <Td>
                    {eventData.Event_Fee
                      ? `Rs. ${eventData.Event_Fee}`
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

export default EventPage;
