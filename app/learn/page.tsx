"use client";
import {
	Container,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Flex,
	Button,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Center,
	SimpleGrid,
	useColorModeValue,
	Box,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineTrophy } from "react-icons/ai";
import programmingData from "./programming.json";
import marketingData from "./marketing.json";
import photographyData from "./photography.json";
import designData from "./design.json";
import financeData from "./finance.json";
import creativeWritingData from "./creativeWriting.json";
import videoEditing from "./videoEditing.json";
import CourseCard from "../components/courseCard";
import { CiCreditCardOff } from "react-icons/ci";
import { TbNotebook } from "react-icons/tb";

export default function Learn() {
	const popularTags = [
		"Mathematics",
		"Science",
		"English Literature",
		"History",
		"Computer Science",
	];
	const tags = [
		"Programming",
		"Marketing",
		"Photography",
		"Design",
		"Finance",
		"Creative Writing",
		"Video Editing",
	];
	return (
		<Stack alignItems="center" spacing={10}>
			<Container maxW="container.lg">
				<Stack spacing={5}>
					<Stack>
						<Heading textAlign={"center"}>Skills in Demand, Courses on Demand</Heading>
						<Text textAlign={"center"} fontSize="lg">
							Advance Your Career with Online Professional Courses
						</Text>
					</Stack>
					<Flex justifyContent={"center"}>
						<InputGroup w="xl">
							<Input
								borderRightRadius={"none"}
								placeholder="What do you want to learn?"
								colorScheme="teal"
							/>
							<InputLeftElement pointerEvents="none">
								<AiOutlineSearch />
							</InputLeftElement>
						</InputGroup>
						<Button borderLeftRadius={"none"}>Search</Button>
					</Flex>
					<Flex gap={3} alignItems="center" justifyContent={"center"}>
						<Text as="b">Popular: </Text>
						{popularTags.map((t, i) => {
							return (
								<Button rounded={"3xl"} key={i} variant="outline" colorScheme="gray">
									{t}
								</Button>
							);
						})}
					</Flex>
				</Stack>
			</Container>
			<Container maxW="container.xl">
				<Tabs isFitted w="full">
					<TabList>
						<Tab>All Courses</Tab>
						{tags.map((t, i) => (
							<Tab key={i}>{t}</Tab>
						))}
					</TabList>
					<TabPanels>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="5">
								{marketingData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
							<Center mt="16">
								<Button size="lg" variant="outline">
									View all Courses
								</Button>
							</Center>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{programmingData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{marketingData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{photographyData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{designData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{financeData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{creativeWritingData.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={[2, 3, 4]} spacing="3">
								{videoEditing.map((c, i) => (
									<CourseCard id={i} {...c} key={i} />
								))}
							</SimpleGrid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
			<Box p="20" w="full" bg={useColorModeValue("gray.50", "gray.700")}>
				<Container maxW="container.xl">
					<SimpleGrid columns={3} spacing={5}>
						<Stack>
							<TbNotebook size={40} />
							<Heading size="md">Practical Skills</Heading>
							<Text>
								Learn proven techniques, methods, and strategies to enhance your professional
								abilities. Apply these skills immediately in your work.
							</Text>
						</Stack>
						<Stack>
							<AiOutlineTrophy size={40} />
							<Heading size="md">Learn from Experts</Heading>
							<Text>
								Enroll in courses specifically designed to meet your professional needs. Benefit
								from the expertise of handpicked industry leaders and experienced practitioners.
							</Text>
						</Stack>
						<Stack>
							<CiCreditCardOff size={40} />
							<Heading size="md">Transparent Pricing</Heading>
							<Text>
								Pay for the courses you choose without any subscription fees. Know the exact cost
								upfront, ensuring transparency and control over your learning investment.
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>
		</Stack>
	);
}
