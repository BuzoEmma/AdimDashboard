import {
  Flex,
  Heading,
  Avatar,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  AvatarGroup,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiChevronDown,
  FiCalendar,
  FiChevronUp,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiPlus,
} from "react-icons/fi";
import "./App.css";
import MyChart from "./MyChart";

const Dashboard = () => {
  const [display, setDisplay] = useState("hide");
  const [value, setValue] = useState(1);
  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow={"hidden"}
      maxW="2000px"
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems={"center"}
        backgroundColor="#020202"
        color={"#fff"}
      >
        <Flex flexDir={"column"} justifyContent="space-between" h={['100%', null,"100vh"]}>
          <Flex flexDir={"column"} as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl","4xl","2xl","3xl","4xl"]}
              alignSelf="center"
              letterSpacing={"tight"}
            >
              Rise
            </Heading>
            <Flex
              flexDir={["row","row","column","column","column"]}
              align={['center','center','center',"flex-start","flex-start"]}
              justifyContent={"center"}

            >
              <Flex className="sidebar-items">
                <Link display={['center', 'center', 'center', 'flex-start', 'flex-start']}>
                  <Icon display={['none','none','flex','flex','flex']} as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link _hover={{ textDecor: "none" }} display={['flex','flex','none','flex','flex']}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items" >
                <Link display={['none','none','flex','flex','flex']}>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }} display={['flex','flex','none','flex','flex']}>
                  <Text>Chart</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link display={['none','none','flex','flex','flex']}>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }} display={['flex','flex','none','flex','flex']}>
                  <Text>Wellet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link display={['none','none','flex','flex','flex']}>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: "none" }} display={['flex','flex','none','flex','flex']}>
                  <Text>Servings</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir={"column"} alignItems="center" mb={10} mt="5">
            <Avatar my={2} />
            <Text>Buzo Emma.</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir={"column"}
        overflow="auto"
        minH={"100vh"}
      >
        <Heading fontWeight={"normal"} mb="4" letterSpacing={"light"}>
          Welcome Back,
          <Flex fontWeight={"semibold"} pl={1} display="inline-flex">
            Buzo
          </Flex>
        </Heading>
        <Text color={"gray"} fontSize="small">
          My Balance
        </Text>
        <Text fontWeight={"bold"} mb={10} fontSize="2xl">
          $5,750.20
        </Text>
        <MyChart />
        <Flex
          justifyContent={"space-between"}
          mt={{ base: "-30%", sm: "-12%", lg: "-5", xl: "10" }}
        >
          <Flex align="flex-end">
            <Heading as={"h2"} size={"lg"} letterSpacing={"tight"}>
              Transaction
            </Heading>
            <Text fontSize={"small"} color="gray" ml={4}>
              April 2022
            </Text>
          </Flex>


          <IconButton icon={<FiCalendar />} />
        </Flex>

        <Flex flexDir={"auto"}>
          <Flex overflow={"auto"}>
            <Table variant={"unstyled"} mt={4}>
              <Thead>
                <Tr color={"gray"}>
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align={"center"}>
                      <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                      <Flex flexDir={"column"}>
                        <Heading size={"sm"} letterSpacing={"tight"}>
                          Amazon
                        </Heading>
                        <Text fontSize={"sm"} color={"gray"}>
                          Spr 24, 2021 at 1:40
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+23</Td>
                  <Td isNumeric>
                    <Text fontWeight={"bold"} display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>{" "}
                <Tr>
                  <Td>
                    <Flex align={"center"}>
                      <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                      <Flex flexDir={"column"}>
                        <Heading size={"sm"} letterSpacing={"tight"}>
                          Amazon
                        </Heading>
                        <Text fontSize={"sm"} color={"gray"}>
                          Spr 24, 2021 at 1:40
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+23</Td>
                  <Td isNumeric>
                    <Text fontWeight={"bold"} display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>{" "}
                <Tr>
                  <Td>
                    <Flex align={"center"}>
                      <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                      <Flex flexDir={"column"}>
                        <Heading size={"sm"} letterSpacing={"tight"}>
                          Amazon
                        </Heading>
                        <Text fontSize={"sm"} color={"gray"}>
                          Spr 24, 2021 at 1:40
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+23</Td>
                  <Td isNumeric>
                    <Text fontWeight={"bold"} display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display == "show" && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align={"center"}>
                          <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                          <Flex flexDir={"column"}>
                            <Heading size={"sm"} letterSpacing={"tight"}>
                              Amazon
                            </Heading>
                            <Text fontSize={"sm"} color={"gray"}>
                              Spr 24, 2021 at 1:40
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>+23</Td>
                      <Td isNumeric>
                        <Text fontWeight={"bold"} display="inline-table">
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>
                        <Flex align={"center"}>
                          <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                          <Flex flexDir={"column"}>
                            <Heading size={"sm"} letterSpacing={"tight"}>
                              Amazon
                            </Heading>
                            <Text fontSize={"sm"} color={"gray"}>
                              Spr 24, 2021 at 1:40
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>+23</Td>
                      <Td isNumeric>
                        <Text fontWeight={"bold"} display="inline-table">
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>
                        <Flex align={"center"}>
                          <Avatar size={"sm"} mr={2} src={"amazon.jpg"} />
                          <Flex flexDir={"column"}>
                            <Heading size={"sm"} letterSpacing={"tight"}>
                              Amazon
                            </Heading>
                            <Text fontSize={"sm"} color={"gray"}>
                              Spr 24, 2021 at 1:40
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>+23</Td>
                      <Td isNumeric>
                        <Text fontWeight={"bold"} display="inline-table">
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
        </Flex>
        
        <Flex align={"center"}>

          <Divider />
          <IconButton
            icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
            onClick={() => {
              if (display == "show") {
                setDisplay("none");
              } else {
                setDisplay("show");
              }
            }}
          />
          <Divider />
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w={["100%", "100%", "35%"]}
        minW={[null, null, "300px", "300px", "400px"]}
        p="3"
        bgColor="#f5f5f5"
        flexDir={"column"}
        overflow="auto"
      >
        <Flex alignContent={"center"} mt={8}>
          <InputGroup
            bgColor={"white"}
            border={"none"}
            borderColor="#fff"
            borderRadius={"10px"}
          >
            <InputLeftElement
              pointerEvents={"none"}
              children={<FiSearch color="gray" />}
            />
            <Input type={"text"} placeholder="Search" borderRadius={"10px"} />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            ml="2"
            fontSize="lg"
            bgColor={"#fff"}
            borderRadius="50%"
            p="10px"
          />
          <Flex
            w={30}
            h={25}
            bgColor="#857295"
            borderRadius={"50%"}
            color="#fff"
            align={"center"}
            justify="center"
            ml={-5}
            mt={-2}
            zIndex={100}
            fontSize={"xs"}
          >
            2
          </Flex>
        </Flex>
        <Heading letterSpacing={"light"} my={3}>
          My Cards
        </Heading>
        {value == 1 && (
          <Box
            borderRadius={"25px"}
            mt={4}
            w={"100%"}
            h={"200px"}
            bgGradient="linear(to-t, #857295, #093FF6)"
          >
            <Flex
              p="1em"
              color={"#fff"}
              flexDir="column"
              h="100%"
              justify={"space-between"}
            >
              <Flex justify={"space-between"} w={"100%"} align="flex-start">
                <Flex flexDir={"column"}>
                  <Text color={"gray-400"}>Current Balance</Text>
                  <Text fontWeight={"semibold"} fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4} py="2">
                **** **** **** 1289
              </Text>
              <Flex align={"flex-end"} justify="space-between">
                <Flex>
                  <Flex flexDir={"column"} mr={4}>
                    <Text textTransform={"uppercase"} fontSize={"xs"}>
                      Valid Thru
                    </Text>
                    <Text fontSize={"lg"}>12/23</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"}>
                  <Text textTransform={"uppercase"} fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize={"lg"}>****</Text>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        {value == 2 && (
          <Box
            borderRadius={"25px"}
            mt={4}
            w={"100%"}
            h={"200px"}
            bgGradient="linear(to-t, #9C3D16, #29259A)"
          >
            <Flex
              p="1em"
              color={"#fff"}
              flexDir="column"
              h="100%"
              justify={"space-between"}
            >
              <Flex justify={"space-between"} w={"100%"} align="flex-start">
                <Flex flexDir={"column"}>
                  <Text color={"gray-400"}>Current Balance</Text>
                  <Text fontWeight={"semibold"} fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4} py="2">
                **** **** **** 1289
              </Text>
              <Flex align={"flex-end"} justify="space-between">
                <Flex>
                  <Flex flexDir={"column"} mr={4}>
                    <Text textTransform={"uppercase"} fontSize={"xs"}>
                      Valid Thru
                    </Text>
                    <Text fontSize={"lg"}>12/23</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"}>
                  <Text textTransform={"uppercase"} fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize={"lg"}>****</Text>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        {value == 3 && (
          <Box
            borderRadius={"25px"}
            mt={4}
            w={"100%"}
            h={"200px"}
            bgGradient="linear(to-t, #857295, #F60921)"
          >
            <Flex
              p="1em"
              color={"#fff"}
              flexDir="column"
              h="100%"
              justify={"space-between"}
            >
              <Flex justify={"space-between"} w={"100%"} align="flex-start">
                <Flex flexDir={"column"}>
                  <Text color={"gray-400"}>Current Balance</Text>
                  <Text fontWeight={"semibold"} fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align={"center"}>
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4} py="2">
                **** **** **** 1289
              </Text>
              <Flex align={"flex-end"} justify="space-between">
                <Flex>
                  <Flex flexDir={"column"} mr={4}>
                    <Text textTransform={"uppercase"} fontSize={"xs"}>
                      Valid Thru
                    </Text>
                    <Text fontSize={"lg"}>12/23</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"}>
                  <Text textTransform={"uppercase"} fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize={"lg"}>****</Text>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        <Flex justifyContent={"center"} mt={2}>
          <Button
            bgColor={value == 1 ? "gray.600" : "gray.400"}
            onClick={() => setValue(1)}
            size={"xs"}
            mx={1}
          />
          <Button
            bgColor={value == 2 ? "gray.600" : "gray.400"}
            onClick={() => setValue(2)}
            size={"xs"}
            mx={1}
          />
          <Button
            bgColor={value == 3 ? "gray.600" : "gray.400"}
            onClick={() => setValue(3)}
            size={"xs"}
            mx={1}
          />
        </Flex>
        <Flex flexDir={"column"} my={4}>
          <Flex justify="space-between" mb={2}>
            <Text>Balance</Text>
            <Text fontWeight={"semibold"}>$140.42</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>Credit Limit</Text>
            <Text fontWeight={"semibold"}>$150.00</Text>
          </Flex>
        </Flex>
        <Heading letterSpacing={"tight"} size="md" my={4}>
          Send Money To
        </Heading>
        <Flex>
          <AvatarGroup size={"md"} max={3}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
          <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor={"gray.300"} />
        </Flex>
        <Text color={"gray"} mt={10} mb={2}>
          Card Number
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents={"none"}
            children={<FiCreditCard color="gray.700" />}
          />
          <Input type={"number"} placeholder="xxxx xxxx xxxx xxxx" />
        </InputGroup>

        <Text color={"gray"} mt={10} mb={2}>
          Sum
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents={"none"}
            children={<FiDollarSign color="gray.700" />}
          />
          <Input type={"number"} placeholder="130.00" />
        </InputGroup>
        <Button
          mt={4}
          bgColor={"blackAlpha.900"}
          color="#fff"
          p={4}
          borderRadius={15}
        >
          Send Money
        </Button>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
