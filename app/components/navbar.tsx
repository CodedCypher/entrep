"use client";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import ColorMode from "./colorMode";

export default function Navbar() {
	return (
		<Container zIndex={100000} maxW="container.xl" top="0" p={5} mb="10">
			<Box w="full">
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Link href="/">
						<Heading as="h1" size="lg">
							Kafkuh
						</Heading>
					</Link>
					<Flex gap={5}>
						<Link href="/explore">
							<Button variant="ghost">Explore</Button>
						</Link>
						<Link href="/learn">
							<Button variant="ghost">Learn</Button>
						</Link>
						<Link href="/about">
							<Button variant="ghost">About</Button>
						</Link>
						<Link href="/contact">
							<Button variant="ghost">Contact Us</Button>
						</Link>
					</Flex>
					<Flex gap={3}>
						<Flex gap={3}>
							<ColorMode />
							<Link href="/login">
								<Button variant="ghost">Login</Button>
							</Link>
							<Link href="/register">
								<Button>Get Started</Button>
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}
