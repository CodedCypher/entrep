"use client";
import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const hideNav = ["/login", "/register"].includes(pathname);
	const size = useWindowSize();
	if (size.width >= 1024) {
		if (hideNav) {
			return <>{children}</>;
		} else {
			return (
				<>
					<Navbar />
					<Box minH="100vh">{children}</Box>
					<Footer />
				</>
			);
		}
	} else {
		return (
			<Center w="100vw" h="100vh">
				<Stack textAlign={"center"} p="10">
					<Heading>Error: Incompatible Device</Heading>
					<Text>
						For the best user experience and to ensure proper functionality, we recommend accessing
						our website using a device with a larger monitor or screen resolution. This will allow
						you to fully enjoy all the features and content we have to offer.
					</Text>
				</Stack>
			</Center>
		);
	}
};

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// only execute all the code below in client side
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

export default LayoutProvider;
