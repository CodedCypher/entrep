"use client";

import {
	Container,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	Flex,
	Text,
	Stack,
	Heading,
	Card,
	CardBody,
	Image,
	Avatar,
	useColorModeValue,
	Spinner,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import CourseCard from "../components/courseCard";
import creators from "./creators.json";
import courses from "./courses.json";
import commissions from "./comissions.json";
import { Suspense } from "react";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		partialVisibilityGutter: 40,
		// slidesToSlide: 2, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
		// slidesToSlide: 2, // optional, default to 1.
		partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 3,
		// slidesToSlide: 2, // optional, default to 1.
	},
};

function CarouselComp({ children }: { children: React.ReactNode }) {
	return (
		<Suspense fallback={<Spinner />}>
			<Carousel
				additionalTransfrom={0}
				arrows
				swipeable={true}
				draggable={true}
				showDots={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				responsive={responsive}
				ssr={true} //means to render carousel on server-side.
				infinite={true}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-23-px">
				{children}
			</Carousel>
		</Suspense>
	);
}
export const creatorTags = [
	"Online Tutoring",
	"Academic Writing",
	"Artist",
	"Music",
	"Developers",
	"Education",
	"Local Business",
];
export default function Explore() {
	const color = useColorModeValue("GrayText", "whitesmoke");
	return (
		<>
			<Container maxW="container.lg">
				<Stack spacing={10}>
					<Stack spacing={3}>
						<InputGroup size="lg" alignItems="center">
							<Input
								borderRadius={"2xl"}
								placeholder="Search"
								colorScheme="teal"
								_focusVisible={{
									outline: "none",
								}}
							/>
							<InputLeftElement pointerEvents="none">
								<AiOutlineSearch />
							</InputLeftElement>
						</InputGroup>
						<Flex gap={3} alignItems="center" justifyContent={"center"}>
							{creatorTags.map((t, i) => (
								<Button rounded={"3xl"} key={i} variant="outline" colorScheme="gray">
									{t}
								</Button>
							))}
						</Flex>
					</Stack>
					<Stack>
						<Flex justifyContent="space-between">
							<Heading size="md">Featured Creators</Heading>
							<Link href="/creators">
								<Button variant="link">See more</Button>
							</Link>
						</Flex>
						<CarouselComp>
							{creators.map(({ name, followers, about, jobTitle }, i) => (
								<Link href={`/creators/${i}`} key={i}>
									<Card maxW="xs" boxShadow={"lg"} borderRadius="lg">
										<Image
											src={faker.image.urlLoremFlickr()}
											alt="image"
											h="20"
											objectFit="cover"
											fallbackSrc="https://via.placeholder.com/20"
											mb="5"
											borderTopRadius={"lg"}
										/>
										<Avatar
											src={faker.internet.avatar()}
											position="absolute"
											top={"22%"}
											left={"10%"}
										/>
										<CardBody>
											<Stack spacing={2}>
												<Heading size="sm">{name}</Heading>
												<Text size="sm">{followers} followers</Text>
												<Text color={color} noOfLines={2} fontSize="sm">
													{about}
												</Text>
												<Text fontSize="xs">{jobTitle}</Text>
											</Stack>
										</CardBody>
									</Card>
								</Link>
							))}
						</CarouselComp>
					</Stack>
					<Stack>
						<Flex justifyContent="space-between">
							<Heading size="md">Featured Courses</Heading>
							<Link href="/learn">
								<Button variant="link">See more</Button>
							</Link>
						</Flex>
						<CarouselComp>
							{courses.map((c, i) => (
								<CourseCard id={i} {...c} key={i} />
							))}
						</CarouselComp>
					</Stack>
					<Stack>
						<Flex justifyContent="space-between">
							<Heading size="md">Comissions</Heading>
							<Link href="/comissions">
								<Button variant="link">See more</Button>
							</Link>
						</Flex>
						<CarouselComp>
							{commissions.map(({ author, commission, price }, i) => (
							<Link href={`/comissions/${i}`} key={i}>
								<Card maxW="xs" boxShadow={"lg"} borderRadius="lg">
									<Image
										src={faker.image.urlLoremFlickr({ category: "abstract" })}
										alt="image"
										h="48"
										fallbackSrc="https://via.placeholder.com/48"
										objectFit="cover"
										mb="5"
										borderTopRadius={"lg"}
									/>
									<CardBody>
										<Stack spacing={2}>
											<Heading size="sm">{commission}</Heading>
											<Text size="sm">by {author}</Text>
											<div>
												<Button float={"right"} colorScheme="yellow">
													{price}
												</Button>
											</div>
										</Stack>
									</CardBody>
								</Card>
							</Link>
							))}
						</CarouselComp>
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
