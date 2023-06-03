"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Heading,
	Text,
	Button,
	Image,
	Flex,
	Stack,
	Avatar,
	Divider,
	Box,
	useColorModeValue,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Card,
	CardBody,
	OrderedList,
	ListItem,
	List,
	ListIcon,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { AiFillStar, AiOutlineCheck, AiOutlineArrowRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

export default function Page({ params }: { params: { slug: string } }) {
	const color = useColorModeValue("GrayText", "whitesmoke");
	const name = faker.person.fullName();
	const process = [
		"Sketches: We begin by creating initial sketches to establish a clear understanding of your requirements. This step helps us avoid major revisions later on.",
		"Colorization: Once the sketches are approved, we move on to adding colors and bringing your artwork to life.",
		"Final Revisions: We provide a certain number of minor revisions for free to ensure your utmost satisfaction with the final result. We value your feedback and make necessary adjustments accordingly.",
		"Source Files: We provide the source files for your project at no additional cost. This way, you can have access to the original files for future use or modifications, if needed.",
	];
	const reasons = [
		"Attention to Detail: We pay close attention to your ideas, preferences, and the mood you want to evoke. By understanding your vision, we create designs that resonate with your audience, making them eager to delve into your content.",
		"Experience: With our extensive experience in the industry, we know how to craft compelling visuals that grab attention and leave a lasting impression. Our expertise enables us to understand the nuances of different genres and tailor our designs accordingly.",
		"Client Satisfaction: Our ultimate goal is your satisfaction. We go above and beyond to ensure that the final artwork meets your expectations. We believe in building long-term relationships with our clients based on trust and outstanding results.",
	];
	const prices = [
		{
			title: "Option 1: Basic Illustration Package",
			price: "AED 963.86",
			description:
				"Simple drawing, no background - up to 2 figures - simple textured background (one color) - high res",
			deliveryTime: "14 Days",
			numFigures: 2,
			features: [
				"Include source file",
				"Printable resolution file",
				"Add background/scene",
				"Include colors in illustration",
				"Include entire body illustration",
			],
		},
		{
			title: "Option 2: Standard Illustration Package",
			price: "AED 1,735",
			description:
				"Complex drawing, no background - up to 4 figures - simple textured background (one color) - high res",
			deliveryTime: "21 Days",
			numFigures: 4,
			features: [
				"Include source file",
				"Printable resolution file",
				"Add background/scene",
				"Include colors in illustration",
				"Include entire body illustration",
			],
		},
		{
			title: "Option 3: Premium Illustration Package",
			price: "AED 2,622",
			description:
				"Complex drawing with a background - up to 5 figures - complex background - high res",
			deliveryTime: "30 Days",
			numFigures: 5,
			features: [
				"Include source file",
				"Printable resolution file",
				"Add background/scene",
				"Include colors in illustration",
				"Include entire body illustration",
			],
		},
	];
	return (
		<Container maxW="container.xl">
			<Flex gap="5">
				<Stack w="100%" flex="2" spacing={5}>
					<Breadcrumb>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Graphics & Design</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink href="#" isCurrentPage>
								Illustration
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Heading>Professional Illustration Cover Design</Heading>
					<Flex gap="3" alignItems="center">
						<Avatar src={faker.internet.avatar()} />
						<Heading size="sm">{name}</Heading>
						<Button variant="link" color={color}>
							@
							{faker.internet.displayName({
								firstName: name.split(" ")[0],
								lastName: name.split(" ")[1],
							})}
						</Button>
						<Box h="30px">
							<Divider orientation="vertical" />
						</Box>
						<Flex gap="1" alignItems="center">
							<Button
								leftIcon={<AiFillStar />}
								p="0"
								variant="ghost"
								size="sm"
								colorScheme="yellow">
								{faker.number.float({ min: 1, max: 5, precision: 0.01 })}
							</Button>
							<Text fontSize="sm" color={color}>
								({faker.number.int({ min: 10, max: 1000 })})
							</Text>
						</Flex>
					</Flex>
					<Image src="/art.jpg" alt="bree" />
					<Heading size="lg">About this gig</Heading>
					<Stack spacing="5">
						<Stack>
							<Heading size="md" color={color}>
								About Me
							</Heading>
							<Text>
								I am bree, a talented and experienced illustrator. With over 8 years of expertise in
								the field, we have worked with clients from all corners of the world, ranging from
								renowned publishing houses to independent authors and musicians.
							</Text>
						</Stack>
						<Stack>
							<Heading size="md" color={color}>
								Price
							</Heading>
							<Text>
								We offer three options for our services, and the prices may vary depending on the
								complexity of your project. However, we are always open to finding a middle ground
								and negotiating a fair price. Please feel free to reach out to us with your
								requirements and budget.
							</Text>
						</Stack>
						<Stack>
							<Heading size="md" color={color}>
								Work Process
							</Heading>
							<Text>
								Our work process ensures that we deliver top-quality illustrations and designs that
								align with your vision. Here&apos;s how we proceed:
							</Text>
							<OrderedList pl="10">
								<Stack spacing="3">
									{process.map((p, i) => (
										<ListItem key={i}>{p}</ListItem>
									))}
								</Stack>
							</OrderedList>
						</Stack>
						<Stack>
							<Heading size="md" color={color}>
								Why Choose Me?
							</Heading>
							<Text>
								I believe in providing a personalized approach to each and every customer. We
								understand that every story, whether it&apos;s a book or an album, holds a deeper
								meaning that can only be conveyed through captivating visuals. Here&apos;s why you
								should choose us:
							</Text>
							<OrderedList pl="10">
								<Stack spacing="3">
									{reasons.map((r, i) => (
										<ListItem key={i}>{r}</ListItem>
									))}
								</Stack>
							</OrderedList>
							<Text>
								Get in touch with us today, and let us bring your vision to life through stunning
								illustrations, posters, book covers, or album artwork!
							</Text>
							<Text>
								Note: Please contact us with the details of your project for an accurate quote.
							</Text>
						</Stack>
					</Stack>
					<Divider />
					<Stack></Stack>
				</Stack>
				<Stack flex="1" w="100%">
					<Card variant="outline" position="sticky" top="10">
						<Tabs isFitted variant="enclosed-colored">
							<TabList>
								<Tab>Basic</Tab>
								<Tab>Standard</Tab>
								<Tab>Premium</Tab>
							</TabList>
							<CardBody>
								<TabPanels>
									{prices.map(({ price, description, deliveryTime, features, numFigures }, i) => (
										<TabPanel key={i}>
											<Stack spacing="5">
												<Heading size="lg">{price}</Heading>
												<Text>{description}</Text>
												<Flex gap="3" alignItems="center">
													<BiTimeFive />
													<Heading size="sm">{deliveryTime}</Heading>
												</Flex>
												<List spacing={3}>
													{features.map((f, i) => (
														<ListItem key={i}>
															<ListIcon as={AiOutlineCheck} color="green.500" />
															{f}
														</ListItem>
													))}
												</List>
												<Button colorScheme="yellow" size="lg" rightIcon={<AiOutlineArrowRight />}>
													Continue
												</Button>
											</Stack>
										</TabPanel>
									))}
								</TabPanels>
							</CardBody>
						</Tabs>
					</Card>
				</Stack>
			</Flex>
		</Container>
	);
}
