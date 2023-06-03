"use client";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Custom404 = () => {
	return (
		<Stack textAlign="center" py={10} px={6} h="80vh" alignItems="center">
			<Heading
				display="inline-block"
				as="h2"
				size="2xl"
				bgGradient="linear(to-r, teal.400, teal.600)"
				backgroundClip="text">
				404
			</Heading>
			<Text fontSize="18px" mt={3} mb={2}>
				Page Not Found
			</Text>
			<Text color={"gray.500"} mb={6}>
				The page you&apos;re looking for does not seem to exist
			</Text>
			<Link href="/">
				<Button colorScheme="teal" color="white" variant="solid">
					Go to Home
				</Button>
			</Link>
		</Stack>
	);
};

export default Custom404;
