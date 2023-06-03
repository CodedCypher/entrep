"use client";
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ColorMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			{colorMode === "dark" ? (
				<IconButton variant="ghost" aria-label="light" onClick={toggleColorMode} icon={<BsSun />} />
			) : (
				<IconButton variant="ghost" aria-label="dark" onClick={toggleColorMode} icon={<BsMoon />} />
			)}
		</>
	);
};

export default ColorMode;
