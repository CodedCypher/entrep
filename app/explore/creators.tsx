import {
	Avatar,
	Card,
	CardBody,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import Carousel from "react-multi-carousel";

export default function Creators() {
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
	const creators = [
		{
			name: "Ellie Makin Roberts",
			followers: "42",
			about: "Hello! I am Ellie Mackin Roberts. I am an ancient historian, author, TikToker.",
			jobTitle: "Writer",
		},
		{
			name: "Samira Singh",
			followers: "127k",
			about:
				"Hi there! I'm Samira Singh, a fashion enthusiast, content creator, and travel vlogger.",
			jobTitle: "Fashion and Travel Influencer",
		},
		{
			name: "Max Chen",
			followers: "1.2m",
			about:
				"Hey everyone! I'm Max Chen, a professional photographer and nature lover. Join me as I capture the beauty of the world through my lens.",
			jobTitle: "Photographer",
		},
		{
			name: "Maya Patel",
			followers: "550k",
			about:
				"Namaste! I'm Maya Patel, a yoga instructor, wellness advocate, and meditation guide. Let's embark on a journey to find inner peace and balance together.",
			jobTitle: "Yoga Instructor",
		},
		{
			name: "Alex Nguyen",
			followers: "780k",
			about:
				"Hey, I'm Alex Nguyen, a self-taught chef and food blogger. Join me as I explore different cuisines, share delicious recipes, and bring out your inner chef.",
			jobTitle: "Chef and Food Blogger",
		},
		{
			name: "Lisa Johnson",
			followers: "320k",
			about:
				"Hi, I'm Lisa Johnson, a DIY enthusiast, home decor lover, and lifestyle blogger. Get ready to unleash your creativity and transform your living spaces with me.",
			jobTitle: "DIY and Lifestyle Blogger",
		},
	];

	const color = useColorModeValue("GrayText", "whitesmoke");
	return (
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
						<Avatar src={faker.internet.avatar()} position="absolute" top={"22%"} left={"10%"} />
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
		</Carousel>
	);
}
