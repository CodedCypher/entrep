import {
	Button,
	Card,
	CardBody,
	Flex,
	Image,
	Stack,
	Tag,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import Link from "next/link";

interface Course {
	id: string | number;
	author: string;
	title: string;
	about: string;
	price: string;
	best_seller: boolean;
	rating: string | number;
	duration: string;
	rated_count: string | number;
}

const CourseCard = ({
	id,
	author,
	title,
	about,
	price,
	best_seller,
	rating,
	duration,
	rated_count,
}: Course) => {
	const color = useColorModeValue("GrayText", "whitesmoke");
	return (
		<Link href={`/learn/${id}`}>
			<Card maxW="xs" boxShadow={"lg"} borderRadius="lg">
				<Image
					src={faker.image.urlLoremFlickr({ category: "business" })}
					alt="image"
					h="48"
					fallbackSrc="https://via.placeholder.com/48"
					objectFit="cover"
					borderTopRadius={"lg"}
				/>
				<CardBody>
					<Stack spacing={"3"}>
						<Stack h="56" spacing={"1"}>
							<Flex gap="2">
								<Tag size="sm" textTransform={"uppercase"} colorScheme="gray">
									Course
								</Tag>
								{best_seller && (
									<Tag size="sm" textTransform={"uppercase"} colorScheme="orange">
										Best Seller
									</Tag>
								)}
							</Flex>
							<Text fontSize={"md"} as="b">
								{title}
							</Text>
							<Flex alignItems={"center"} gap="4">
								<Flex alignItems={"center"} gap={"1"}>
									<Button
										leftIcon={<AiFillStar />}
										p="0"
										variant="ghost"
										size="sm"
										colorScheme="yellow">
										{rating}
									</Button>
									<Text fontSize="sm" color={color}>
										({rated_count})
									</Text>
								</Flex>

								<Button p="0" leftIcon={<BiTime />} colorScheme="gray" variant="ghost" size="sm">
									{duration}
								</Button>
							</Flex>
							<Text fontSize={"sm"}>by {author}</Text>
							<Text fontSize="sm" color={color} noOfLines={3}>
								{about}
							</Text>
						</Stack>
						<div>
							<Button float={"right"} colorScheme="yellow">
								{price}
							</Button>
						</div>
					</Stack>
				</CardBody>
			</Card>
		</Link>
	);
};

export default CourseCard;
