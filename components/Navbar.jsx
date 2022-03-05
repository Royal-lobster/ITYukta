import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { AiFillThunderbolt } from "react-icons/ai";

const NAV_ITEMS = [
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
        href: "/workshops/app-development-with-iot",
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
        subLabel: "Technology quiz competition, ",
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
      },
    ],
  },
  {
    label: "Culturals",
    href: "/culturals",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="gray.800"
        color="white"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.900"
        align={"center"}
      >
        <Flex flex={{ base: 1 }} align="center" gap={2} justify="start">
          <Icon as={AiFillThunderbolt} color="green.500" fontSize="20px" />
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={"bold"}
            color={"white"}
            fontFamily="ITYukta"
          >
            IT Yukta
          </Text>
        </Flex>

        <Stack justify={"flex-end"} display={{ base: "none", lg: "flex" }}>
          <DesktopNav />
        </Stack>

        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "gray.200";
  const linkHoverColor = "white";
  const popoverContentBgColor = "gray.700";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"xl"}
                w="auto"
                maxW="sm"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "gray.600" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="gray.800" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.200">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor="gray.700"
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
