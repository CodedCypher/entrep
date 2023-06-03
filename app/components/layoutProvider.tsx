"use client";
import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const hideNav = ["/login", "/register"].includes(pathname);
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
};

export default LayoutProvider;
