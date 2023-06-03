import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Comissions() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 3,
		},
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
	const comissions = [
		{
			commission: "short stories",
			author: "annarabella grumble",
			price: "$50",
		},
		{
			commission: "illustrations",
			author: "lucas sanchez",
			price: "$80",
		},
		{
			commission: "logo design",
			author: "emily thompson",
			price: "$120",
		},
		{
			commission: "custom portraits",
			author: "benjamin roberts",
			price: "$150",
		},
		{
			commission: "web development",
			author: "sophia lee",
			price: "$300",
		},
		{
			commission: "social media marketing strategy",
			author: "alex turner",
			price: "$200",
		},
	];

	return (
		<Carousel
			arrows
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
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-23-px">
			{comissions.map(({ author, commission, price }, i) => (
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
		</Carousel>
	);
}
