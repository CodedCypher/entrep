"use client";

import {
	Input,
	Divider,
	Button,
	Stack,
	Heading,
	Flex,
	InputGroup,
	InputRightElement,
	FormControl,
	FormLabel,
	Image,
	IconButton,
	Checkbox,
	Box,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const bg = useColorModeValue("gray.50", "gray.800");
	return (
		<Box
			backgroundSize="cover"
			backgroundImage={
				"url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)"
			}>
			<Stack bg={bg} h="100vh" maxW="lg" justifyContent="center" spacing="5" p="10">
				<Stack textAlign={"center"}>
					<Heading>Welcome back</Heading>
					<Text fontSize="sm" color="GrayText">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Text>
				</Stack>
				<Button leftIcon={<FcGoogle />} variant="outline" colorScheme="gray">
					Sign in with Google
				</Button>
				<Flex alignItems="center" gap="3">
					<Divider />
					<Text>OR</Text>
					<Divider />
				</Flex>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input placeholder="Enter your email" type="email" />
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<InputGroup size="md">
						<Input
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Enter your password"
						/>
						<InputRightElement width="4.5rem">
							<IconButton
								colorScheme="gray"
								variant="ghost"
								aria-label="eye"
								icon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
								onClick={handleClick}
							/>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Flex justifyContent={"space-between"}>
					<Checkbox>Remember me</Checkbox>
					<Button variant="link" colorScheme="gray">
						Forgot Password
					</Button>
				</Flex>
				<Button colorScheme="gray">Sign In</Button>
				<Flex gap={2} justifyContent={"center"}>
					<Text>Don&rsquo;t have an account?</Text>
					<Link href="/register">
						<Button variant="link" colorScheme="gray">
							Sign up
						</Button>
					</Link>
				</Flex>
			</Stack>
			{/* <Image
				src="/pexels-eberhard-grossgasteiger-572897.jpg"
				alt="pexels-eberhard-grossgasteiger-572897.jpg"
				h="100vh"
			/> */}
		</Box>
	);
}
