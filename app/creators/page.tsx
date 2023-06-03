"use client";

import { faker } from "@faker-js/faker";
import {
	Container,
	Card,
	CardBody,
	Button,
	Text,
	Heading,
	Flex,
	InputGroup,
	Input,
	InputLeftElement,
	Stack,
	SimpleGrid,
	Image,
	Avatar,
	useColorModeValue,
	CardFooter,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { creatorTags } from "../explore/page";
import creators from "./creators.json";
import Link from "next/link";

const Page = () => {
	const color = useColorModeValue("GrayText", "whitesmoke");
	return (
		<Container maxW="container.xl">
			<Stack spacing="5">
				<Flex justifyContent={"center"}>
					<InputGroup w="xl">
						<Input borderRightRadius={"none"} placeholder="Search for creators" />
						<InputLeftElement pointerEvents="none">
							<AiOutlineSearch />
						</InputLeftElement>
					</InputGroup>
					<Button borderLeftRadius={"none"}>Search</Button>
				</Flex>
				<Flex gap={3} alignItems="center" justifyContent={"center"}>
					{creatorTags.map((t, i) => (
						<Button rounded={"3xl"} key={i} variant="outline" colorScheme="gray">
							{t}
						</Button>
					))}
				</Flex>
				<SimpleGrid columns={[2, 3, 4]} spacing="5">
					{creators.map(({ name, about, followers, jobTitle }, i) => (
						<Card maxW="xs" boxShadow={"lg"} borderRadius="lg" key={i}>
							<Image
								src={faker.image.urlLoremFlickr()}
								alt="image"
								h="32"
								objectFit="cover"
								fallbackSrc="https://via.placeholder.com/20"
								mb="5"
								borderTopRadius={"lg"}
							/>
							<Avatar
								size="lg"
								src={faker.internet.avatar()}
								position="absolute"
								top={"25%"}
								left={"10%"}
							/>
							<CardBody>
								<Stack spacing={2}>
									<Heading size="md">{name}</Heading>
									<Text>{followers} followers</Text>
									<Text color={color} noOfLines={3}>
										{about}
									</Text>

									<CardFooter px="0" pb="0">
										<Link href={`/creators/${i}`}>
											<Button size="md" colorScheme="gray">
												View Page
											</Button>
										</Link>
									</CardFooter>
								</Stack>
							</CardBody>
						</Card>
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
};

export default Page;
