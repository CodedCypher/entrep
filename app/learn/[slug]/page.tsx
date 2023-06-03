"use client";
import {
	Container,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Heading,
	Text,
	Button,
	Flex,
	useColorModeValue,
	Stack,
	Box,
	SimpleGrid,
	Card,
	CardBody,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	UnorderedList,
	ListItem,
	IconButton,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineCheck, AiOutlineFileText } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { TbNotebook } from "react-icons/tb";
import { BsPhone, BsInfinity } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import course from "./course.json";

export default function Page({ params }: { params: { slug: string } }) {
	const WhatYouWillLearn = [
		"Master the basics of programming: Gain proficiency in variables, data types, control flow statements, functions, and modular programming.",
		"Understand object-oriented programming (OOP): Learn the principles of OOP, including classes, objects, inheritance, polymorphism, and encapsulation.",
		"Develop problem-solving skills: Learn how to approach problems algorithmically and implement efficient data structures and algorithms.",
		"Build web applications: Acquire the foundational knowledge of web development, including HTML, CSS, JavaScript, and server-side programming.",
		"Learn essential debugging and testing techniques: Acquire strategies to identify and fix bugs in your code and write effective unit tests.",
		"Collaborate effectively as a programmer: Learn version control using Git and GitHub, participate in collaborative workflows, and engage in code review practices.",
	];
	const requirements = [
		"Basic computer literacy",
		"A computer with a reliable internet connection",
		"Any modern programming language of your choice (e.g., Python, JavaScript, Java)",
	];
	const color = useColorModeValue("GrayText", "whitesmoke");
	const includes = [
		{
			icon: <MdOutlineOndemandVideo />,
			info: "11.5 hours on-demand video",
		},
		{
			icon: <AiOutlineFileText />,
			info: "Assignments",
		},
		{
			icon: <TbNotebook />,
			info: "1 article",
		},
		{ icon: <HiOutlineDocumentDownload />, info: "1 downloadable resource" },
		{ icon: <BsPhone />, info: "Access on mobile and TV" },
		{ icon: <BsInfinity />, info: "Full lifetime access" },
		{ icon: <GrCertificate />, info: "Certificate completion" },
	];

	return (
		<Container maxW="container.xl">
			<Flex gap={7}>
				<Stack flex="1">
					<Breadcrumb>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink href="#">Development</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink href="#">Programming</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Stack>
						<Heading>Comprehensive Programming Fundamentals</Heading>
						<Text>
							The Comprehensive Programming Fundamentals course is designed to provide you with a
							solid foundation in programming concepts, techniques, and best practices. Whether
							you&apos;re a beginner with no prior programming experience or an intermediate
							programmer looking to strengthen your skills, this course will guide you through the
							essential principles and help you develop a strong programming mindset.
						</Text>
						<Flex alignItems={"center"} gap={2}>
							<Button
								leftIcon={<AiFillStar />}
								p="0"
								variant="ghost"
								size="sm"
								colorScheme="yellow">
								4.7
							</Button>
							<Text fontSize="xs" color={color}>
								(107,332 ratings)
							</Text>
							<Text fontSize="xs">1,086,820 students</Text>
						</Flex>
						<Flex gap={2}>
							<Text fontSize={"xs"}>Created by </Text>
							<Button size="xs" variant="link">
								Carlo Meneses
							</Button>
						</Flex>
					</Stack>
					<Stack spacing={10} mt="10">
						<Card variant="outline">
							<CardBody>
								<Stack spacing={10}>
									<Heading size="lg">What’s in this degree program?</Heading>
									<SimpleGrid columns={2} spacing={5}>
										{WhatYouWillLearn.map((t, i) => (
											<Flex gap="2" key={i}>
												<AiOutlineCheck size={30} />
												<Text fontSize="sm">{t}</Text>
											</Flex>
										))}
									</SimpleGrid>
								</Stack>
							</CardBody>
						</Card>
						<Stack>
							<Heading size="lg" mb="5">
								Course Content
							</Heading>
							12 sections • 51 Lectures • 9h 30m total length
							<Accordion allowMultiple={true}>
								{course.map(({ module, timeToComplete, lectures, topics }, i) => (
									<AccordionItem key={i}>
										<AccordionButton p="6">
											<Flex w="full" justifyContent="space-between">
												<Flex gap={5}>
													<AccordionIcon mr="5" />
													<Heading size="sm">{module}</Heading>
												</Flex>
												<Text color={color}>
													{lectures} Lectures • {timeToComplete}
												</Text>
											</Flex>
										</AccordionButton>
										<AccordionPanel pb={4}>
											<Stack alignItems={"left"}>
												{topics.map((t, i) => (
													<Flex gap={5} alignItems="center" key={i}>
														<MdOutlineOndemandVideo />
														<Text>{t}</Text>
													</Flex>
												))}
											</Stack>
										</AccordionPanel>
									</AccordionItem>
								))}
							</Accordion>
						</Stack>

						<Stack>
							<Heading size="lg">Requirements</Heading>
							<UnorderedList pl="5">
								{requirements.map((r, i) => (
									<ListItem key={i}>{r}</ListItem>
								))}
							</UnorderedList>
						</Stack>

						<Stack>
							<Heading size="lg">Description</Heading>
							<Text>
								The Comprehensive Programming Fundamentals course is designed to provide you with a
								solid foundation in programming concepts, techniques, and best practices. Whether
								you&apos;re a beginner with no prior programming experience or an intermediate
								programmer looking to strengthen your skills, this course will guide you through the
								essential principles and help you develop a strong programming mindset. Throughout
								the course, you will learn about programming paradigms, various programming
								languages, setting up a development environment, variables, data types, control flow
								statements, functions, and modular programming.
							</Text>
							<Text>
								The course will also cover important topics such as data structures and algorithms,
								object-oriented programming, file handling, input/output operations, debugging and
								testing strategies, web development basics, databases and SQL, version control and
								collaboration using Git and GitHub, software development best practices, and an
								introduction to popular programming frameworks and libraries.
							</Text>
							Text
						</Stack>

						<Stack>Heading</Stack>
					</Stack>
				</Stack>
				<Card boxShadow="xl" h="fit-content" w="96" position="sticky" top="5">
					<iframe
						width="100%"
						height="200px"
						src="https://www.youtube.com/embed/zOjov-2OZ0E?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=1&cc_load_policy=1&start=0&end=0&origin=http://youtubeembedcode.com"></iframe>
					<CardBody>
						<Stack spacing="7">
							<Stack>
								<Heading>$48</Heading>
								<Button>Buy Course</Button>
								<Button variant="outline">Free preview</Button>
							</Stack>
							<Stack>
								<Heading size="md">This course includes:</Heading>
								<Stack spacing="2">
									{includes.map(({ info, icon }, i) => (
										<Flex key={i} alignItems={"center"}>
											{/* <IconButton
												aria-label="icon"
												icon={icon}
												variant="ghost"
												colorScheme="gray"
												p="0"
											/> */}
											{icon}
											<Text fontSize="sm" ml="2">
												{info}
											</Text>
										</Flex>
									))}
								</Stack>
							</Stack>
							<Flex justifyContent={"space-between"}>
								<Button variant="link" size="sm">
									Share
								</Button>
								<Button variant="link" size="sm">
									Gift this course
								</Button>
								<Button variant="link" size="sm">
									Apply Coupon
								</Button>
							</Flex>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
		</Container>
	);
}
