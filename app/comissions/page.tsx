"use client";

import {
	Button,
	Flex,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
	Tag,
	Card,
	CardBody,
	useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import Masonry from "react-masonry-css";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function Page() {
	const color = useColorModeValue("GrayText", "whitesmoke");
	const popularTags = ["Website Design", "WordPress", "Logo Design", "Ai Services"];
	return (
		<Stack minH="100vh">
			<Stack spacing={10} my="10">
				<Flex alignItems={"center"} justifyContent={"center"} gap={"10"}>
					<Stack spacing={5}>
						<Heading textAlign={"center"}>Find the right freelance service, right away</Heading>
						<InputGroup>
							<Input placeholder="Search for any service" colorScheme="teal" />
							<InputLeftElement pointerEvents="none">
								<AiOutlineSearch />
							</InputLeftElement>
						</InputGroup>
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
				</Flex>
			</Stack>
			<Masonry
				breakpointCols={4}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid-column">
				{[...Array(Math.floor(Math.random() * 50) + 50)].map((_, i) => {
					const h = Math.floor(Math.random() * 500) + 300;
					return (
						<Link href={`/comissions/${i}`} key={i}>
							<Card position="relative">
								<Image
									src={faker.image.urlPicsumPhotos({ height: h })}
									alt="img"
									fallbackSrc={`https://via.placeholder.com/${h}`}
								/>
								<Tag
									variant="solid"
									colorScheme="yellow"
									size="lg"
									position="absolute"
									top="5%"
									right="5%">
									${faker.number.int({ min: 5, max: 100 })}
								</Tag>
								<CardBody>
									<Stack>
										<Button
											textTransform={"capitalize"}
											suze-
											mb="2"
											colorScheme="ghost"
											variant={"link"}
											w="fit-content">
											{faker.lorem.word({ length: { max: 10, min: 3 } })}
										</Button>
										<Heading textTransform={"capitalize"} size="sm">
											{faker.lorem.words()}
										</Heading>
										<Text color={color}>by {faker.internet.displayName()}</Text>
										<Flex justifyContent="space-between" alignItems="center" mt="2">
											<Button size="sm" variant={"outline"}>
												Connect with Seller
											</Button>
											<Button leftIcon={<AiOutlineHeart />} variant="ghost" colorScheme="gray">
												{faker.number.int({ min: 10, max: 10000 })}
											</Button>
										</Flex>
									</Stack>
								</CardBody>
							</Card>
						</Link>
					);
				})}
			</Masonry>
		</Stack>
	);
}
