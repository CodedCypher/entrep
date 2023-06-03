"use client";
import { ReactNode, Suspense } from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
	Button,
	Spinner,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { faker } from "@faker-js/faker";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={<Spinner />}>
			<Stack
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"lg"}
				p={8}
				rounded={"xl"}
				align={"center"}
				pos={"relative"}
				_after={{
					content: `""`,
					w: 0,
					h: 0,
					borderLeft: "solid transparent",
					borderLeftWidth: 16,
					borderRight: "solid transparent",
					borderRightWidth: 16,
					borderTop: "solid",
					borderTopWidth: 16,
					borderTopColor: useColorModeValue("white", "gray.800"),
					pos: "absolute",
					bottom: "-16px",
					left: "50%",
					transform: "translateX(-50%)",
				}}>
				{children}
			</Stack>
		</Suspense>
	);
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
	return (
		<Text textAlign={"center"} color={useColorModeValue("gray.600", "gray.400")} fontSize={"sm"}>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Avatar src={src} mb={2} />
			<Stack spacing={-1} align={"center"}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

export default function Testimonials() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			partialVisibilityGutter: 40,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			partialVisibilityGutter: 30,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const testimonials = [
		{
			name: "Samantha Adams",
			profession: "Freelance Illustrator",
			testimonialHeading: "Monetizing my skills",
			testimonial:
				"Kafkuh has connected me with clients who appreciate my unique style. It's user-friendly and the secure communication channel makes collaboration easy. Thanks to Kafkuh, I've monetized my skills and turned my passion into a profitable career.",
		},
		{
			name: "Mark Thompson",
			profession: "Entrepreneur",
			testimonialHeading: "Simplified logo design process",
			testimonial:
				"Kafkuh made it incredibly simple to find talented designers for my logo. The platform allowed me to review portfolios, communicate, and request revisions. Highly recommended for high-quality services.",
		},
		{
			name: "Sarah Johnson",
			profession: "Philanthropist",
			testimonialHeading: "Empowering artists",
			testimonial:
				"Kafkuh empowers artists to showcase their skills, connect with clients, and earn a living doing what they love. Proud to contribute to such a worthy cause.",
		},
		{
			name: "Emily Walker",
			profession: "Content Marketer",
			testimonialHeading: "Go-to platform for writers",
			testimonial:
				"Kafkuh is my go-to platform for finding talented writers. The intuitive interface and bidding system make it easy to collaborate and ensure high-quality deliverables.",
		},
		{
			name: "Daniel Ramirez",
			profession: "Freelance Painter",
			testimonialHeading: "Streamlined commission process",
			testimonial:
				"Kafkuh provided a platform to showcase my work and connect with clients. The streamlined process made working on commissions hassle-free. A game-changer for artists.",
		},
		{
			name: "Rebecca Foster",
			profession: "Graphic Designer",
			testimonialHeading: "Gaining a competitive edge",
			testimonial:
				"As a premium member of Kafkuh, I've gained a competitive edge. The platform's enhanced features have helped me grow my business and connect with clients.",
		},
		{
			name: "John Anderson",
			profession: "Marketing Manager",
			testimonialHeading: "Supporting talented individuals",
			testimonial:
				"Our partnership with Kafkuh has helped us reach a highly targeted audience of talented individuals. The platform's commitment to supporting and empowering artists aligns perfectly with our mission.",
		},
	];
	return (
		<>
			<Box bg={useColorModeValue("gray.50", "gray.700")}>
				<Box as={Stack} py={16} spacing={12}>
					<Stack spacing={0} align={"center"}>
						<Button variant="link" textTransform={"uppercase"}>
							Testimonials
						</Button>
						<Heading>Our Clients Speak</Heading>
					</Stack>
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={responsive}
						ssr={true} //means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={3000}
						keyBoardControl={true}
						customTransition="all .5"
						transitionDuration={500}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px">
						{testimonials.map(({ name, profession, testimonial, testimonialHeading }, i) => (
							<Testimonial key={i}>
								<TestimonialContent>
									<TestimonialHeading>{testimonialHeading}</TestimonialHeading>
									<TestimonialText>{testimonial}</TestimonialText>
								</TestimonialContent>
								<TestimonialAvatar src={faker.internet.avatar()} name={name} title={profession} />
							</Testimonial>
						))}
					</Carousel>
				</Box>
			</Box>
		</>
	);
}
