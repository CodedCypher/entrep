"use client";
import { Container, Heading, Text, Image, Stack } from "@chakra-ui/react";

export default function Page() {
	return (
		<Container maxW="container.md">
			<Stack spacing="5">
				<Heading>About Us</Heading>
				<Text>
					Welcome to Kafkuh, an innovative e-commerce platform dedicated to empowering individuals
					to monetize their talents through service offerings. Our mission is to provide a seamless
					and user-friendly platform that connects individuals with a desire to sell their academic
					skills to those seeking their services.
				</Text>
				<Text>
					At Kafkuh, we have adopted the Service-as-a-Product ("SaaP") model, similar to Fiverr, to
					create an on-demand, e-commerce-like experience. Our platform simplifies the process of
					working with freelancers, making it hassle-free and convenient for both service providers
					and clients.
				</Text>
				<Text>
					We believe that everyone has unique talents and skills to offer, and our streamlined
					approach ensures that individuals can easily showcase their academic expertise in a
					variety of fields. Whether you excel in academic writing, research, data analysis,
					tutoring, or any other academic discipline, Kafkuh provides the ideal platform for talents
					to connect with clients who appreciate their unique abilities.
				</Text>
				<Text>
					Our vision extends beyond just providing a marketplace for academic services. We recognize
					that artists and commissioners represent a vast and diverse market with unique needs and
					preferences. By empowering talented artists and facilitating the commissioning process for
					commissioners, we aim to create a vibrant and thriving marketplace that benefits everyone
					involved.
				</Text>
				<Image src="undraw_engineering_team_a7n2.svg" width="100%" />
			</Stack>
		</Container>
	);
}
