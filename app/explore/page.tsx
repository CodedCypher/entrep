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
import Link from "next/link";
import dynamic from "next/dynamic";
import Comissions from "./comissions";
import Courses from "./courses";
import Creators from "./creators";

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
						<Creators />
					</Stack>
					<Stack>
						<Flex justifyContent="space-between">
							<Heading size="md">Featured Courses</Heading>
							<Link href="/learn">
								<Button variant="link">See more</Button>
							</Link>
						</Flex>
						<Courses />
					</Stack>
					<Stack>
						<Flex justifyContent="space-between">
							<Heading size="md">Comissions</Heading>
							<Link href="/comissions">
								<Button variant="link">See more</Button>
							</Link>
						</Flex>
						<Comissions />
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
