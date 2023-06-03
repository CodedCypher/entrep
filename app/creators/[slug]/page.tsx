"use client";
// @ts-nocheck

import {
	Container,
	Heading,
	Text,
	Image,
	Stack,
	Avatar,
	Flex,
	Button,
	IconButton,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Card,
	CardBody,
	Input,
	useNumberInput,
	Textarea,
	InputLeftElement,
	InputGroup,
	useColorModeValue,
	SimpleGrid,
	Tag,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import {
	AiOutlineMail,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineLink,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiFillRedditCircle,
	AiOutlineDollarCircle,
} from "react-icons/ai";
import Masonry from "react-masonry-css";

export default function Page({ params }: { params: { slug: string } }) {
	const [tabIndex, setTabIndex] = useState(0);
	const [name] = useState(faker.person.fullName());
	const [avatar] = useState(faker.internet.avatar());
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
		step: 1,
		defaultValue: 1,
		min: 1,
	});
	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();
	const color = useColorModeValue("GrayText", "whitesmoke");

	const handleTabsChange = (index: number) => {
		setTabIndex(index);
	};

	return (
		<Container maxW="container.lg">
			<Stack position="relative">
				<Image src={faker.image.urlPicsumPhotos()} objectFit={"cover"} alt="" w="100%" h="300px" />
				<Flex
					top="-30px"
					position={"relative"}
					alignItems={"center"}
					justifyContent={"space-between"}>
					<Flex alignItems={"center"} gap="5">
						<Avatar
							position="relative"
							top="-10px"
							boxShadow={"0px 4px 20px rgba(149, 185, 193, 0.2)"}
							p="2"
							size="2xl"
							src={avatar}
						/>
						<Stack>
							<Heading size="lg">{name}</Heading>
							<Text fontSize="md">{faker.number.int({ min: 10, max: 1000 })} Followers</Text>
						</Stack>
					</Flex>
					<Flex gap="3">
						<Button colorScheme="yellow" px="10">
							Donate
						</Button>
						<Button colorScheme="gray">Follow</Button>
						<IconButton aria-label="mail" icon={<AiOutlineMail />} colorScheme="gray" />
					</Flex>
				</Flex>
				<Tabs index={tabIndex} onChange={handleTabsChange}>
					<TabList>
						<Tab>About</Tab>
						<Tab>Gallery</Tab>
						<Tab>Shop</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Flex gap="5">
								<Stack w="100%" flexGrow={"1/4"} spacing={7}>
									<Card>
										<CardBody>
											<Stack spacing="3">
												<Heading size="sm">About</Heading>
												<Text>{faker.lorem.sentences()}</Text>
												<Flex alignItems="center" gap={2}>
													<AiOutlineLink size="20" />
													<Text color={color}>patreon.com/{faker.internet.displayName()}</Text>
												</Flex>
												<Flex>
													<IconButton
														color={color}
														variant="ghost"
														colorScheme="gray"
														aria-label="insta"
														fontSize="20px"
														icon={<AiOutlineInstagram />}
													/>
													<IconButton
														color={color}
														variant="ghost"
														aria-label="twitter"
														colorScheme="gray"
														fontSize="20px"
														icon={<AiOutlineTwitter />}
													/>
													<IconButton
														color={color}
														variant="ghost"
														aria-label="reddit"
														colorScheme="gray"
														fontSize="20px"
														icon={<AiFillRedditCircle />}
													/>
												</Flex>
											</Stack>
										</CardBody>
									</Card>
									<Card>
										<CardBody>
											<Stack spacing={5}>
												<Flex justifyContent="space-between">
													<Heading size="sm">Gallery</Heading>
													<Button variant="link" color={color}>
														View Gallery
													</Button>
												</Flex>
												<SimpleGrid columns={2} spacing={2}>
													{[...Array(4).keys()].map((_, i) => (
														<Image
															boxSize="225px"
															maxH="200"
															fallbackSrc="https://via.placeholder.com/200"
															objectFit="cover"
															key={i}
															alt="img"
															src={faker.image.urlLoremFlickr({ category: "art" })}
														/>
													))}
												</SimpleGrid>
											</Stack>
										</CardBody>
									</Card>
									<Card position={"sticky"} top="0" height="fit-content">
										<CardBody>
											<Stack spacing={5}>
												<Flex justifyContent="space-between">
													<Heading size="sm">Shop</Heading>
													<Button variant="link" color={color}>
														Go to shop
													</Button>
												</Flex>
												<SimpleGrid columns={2} spacing={2}>
													{[...Array(4).keys()].map((_, i) => (
														<Stack key={i} position="relative">
															<Image
																boxSize="225px"
																maxH="200"
																fallbackSrc="https://via.placeholder.com/200"
																objectFit="cover"
																alt="img"
																src={faker.image.urlLoremFlickr({ category: "art" })}
															/>
															<Heading size="xs">{faker.lorem.words()}</Heading>
															<Tag
																size="lg"
																variant="solid"
																position="absolute"
																right="10%"
																bottom="15%">
																${faker.number.int({ min: 5, max: 100 })}
															</Tag>
														</Stack>
													))}
												</SimpleGrid>
											</Stack>
										</CardBody>
									</Card>
								</Stack>
								<Stack w="100%" flexGrow={"3/4"} spacing={7}>
									<Card>
										<CardBody>
											<Stack spacing="5">
												<Heading size="sm">Donate to {name}</Heading>
												<Flex alignItems="center" justifyContent={"space-between"}>
													<Text>$10 each</Text>
													<Flex gap="5">
														<IconButton
															variant={"ghost"}
															{...dec}
															aria-label="minus"
															icon={<AiOutlineMinus />}
														/>

														<Input variant="filled" maxW="16" {...input} />
														<IconButton
															variant={"ghost"}
															{...inc}
															aria-label="plus"
															icon={<AiOutlinePlus />}
														/>
													</Flex>
												</Flex>
												<InputGroup>
													<InputLeftElement pointerEvents="none" color="gray.300">
														<AiOutlineDollarCircle />
													</InputLeftElement>
													<Input value={Number(input.value) * 10} />
												</InputGroup>
												<Input placeholder="Your name or nickname" />
												<Textarea placeholder="Your message" />
												<Button colorScheme="yellow">Donate ${Number(input.value) * 10}</Button>
											</Stack>
										</CardBody>
									</Card>

									{[...Array(Math.floor(Math.random() * 10) + 1).keys()].map((_, i) => (
										<Card key={i}>
											<CardBody>
												<Stack>
													<Flex alignItems="center">
														<Avatar p="2" src={avatar} />
														<Text fontSize="sm">{name}</Text>
													</Flex>
													<Heading size="sm">{faker.lorem.sentence()}</Heading>
													<Text fontSize="sm">{faker.lorem.lines()}</Text>
													<Image
														w="100%"
														maxH="6xl"
														src={faker.image.urlPicsumPhotos()}
														alt="image"
													/>
												</Stack>
											</CardBody>
										</Card>
									))}
								</Stack>
							</Flex>
						</TabPanel>
						<TabPanel>
							<Masonry
								breakpointCols={3}
								className="my-masonry-grid"
								columnClassName="my-masonry-grid-column">
								{[...Array(Math.floor(Math.random() * 20) + 5)].map((_, i) => {
									const h = Math.floor(Math.random() * 500) + 300;
									return (
										<Stack key={i}>
											<Image
												src={faker.image.urlLoremFlickr({ category: "painting", height: h })}
												alt="img"
												fallbackSrc={`https://via.placeholder.com/${h}`}
											/>
											<Text>{faker.lorem.words()}</Text>
										</Stack>
									);
								})}
							</Masonry>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={3} spacing={5}>
								{[...Array(Math.floor(Math.random() * 20) + 3).keys()].map((_, i) => (
									<Card key={i}>
										<CardBody>
											<Stack position="relative">
												<Image
													h="350"
													objectFit="cover"
													alt="img"
													fallbackSrc="https://via.placeholder.com/350"
													src={faker.image.urlLoremFlickr({ category: "art" })}
												/>
												<Heading size="sm">{faker.lorem.words()}</Heading>
												<Text noOfLines={2}>{faker.lorem.sentences()}</Text>
												<Tag size="lg" variant="solid" position="absolute" right="10%" bottom="25%">
													${faker.number.int({ min: 5, max: 100 })}
												</Tag>
											</Stack>
										</CardBody>
									</Card>
								))}
							</SimpleGrid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Stack>
		</Container>
	);
}
