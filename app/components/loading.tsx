"use client";
import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
	return (
		<Center h="80vh">
			<Spinner size="xl" />
		</Center>
	);
}
