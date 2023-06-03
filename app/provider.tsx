"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, withDefaultColorScheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "teal" }));

	return (
		<CacheProvider>
			<ChakraProvider theme={customTheme}>{children}</ChakraProvider>
		</CacheProvider>
	);
}
