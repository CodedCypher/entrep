"use client";
import {
	Button,
	Heading,
	Text,
	Stack,
	Flex,
	Box,
	Container,
	Image,
	SimpleGrid,
	Card,
	CardBody,
	Center,
	Avatar,
	useColorModeValue,
	Divider,
	IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";
import Testimonials from "./components/testomonials";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
	const [slider, setSlider] = useState<Slider | null>(null);

	const reasons = [
		{
			heading: "Effortless Monetization",
			body: "Showcase your talents, connect with clients, and receive payments seamlessly with Kafkuh. Our user-friendly platform streamlines the process, allowing you to effortlessly monetize your skills and turn your creativity into a lucrative income stream.",
			img: "/undraw_the_world_is_mine_re_j5cr.svg",
		},
		{
			heading: "Thriving Artistic Community",
			body: "Immerse yourself in a thriving artistic community on Kafkuh. Collaborate, network, and exchange ideas with like-minded individuals who share your passion for creativity. Benefit from the collective inspiration, support, and growth opportunities that our platform offers.",
			img: "undraw_community_re_cyrm.svg",
		},
		{
			heading: "Secure and Seamless Collaboration",
			body: "Our platform provides a secure communication channel for smooth discussions, revisions, and timely project deliveries. Rest assured that your creative vision is understood, respected, and protected, while your financial transactions remain secure.",
			img: "undraw_secure_server_re_8wsq.svg",
		},
	];
	const services = [
		{
			heading: "Commission Request Submission:",
			body: "Clients can easily create commission requests on our platform. They provide details such as the service type, requirements, deadlines, and budget.",
			img: "undraw_digital_nomad_re_w8uy.svg",
		},
		{
			heading: "Client Selection and Agreement",
			body: "Clients review proposals from service providers, assessing their profiles, ratings, reviews, and portfolios.",
			img: "undraw_interview_re_e5jn.svg",
		},
		{
			heading: "Work Progress Tracking",
			body: "Clients and service providers can track work progress and communicate through our platform, discussing updates, clarifications, and revisions.",
			img: "undraw_progress_overview_re_tvcl.svg",
		},
		{
			heading: "Payment and Commission",
			body: "After approving the work, clients make payments based on agreed terms. Our platform handles the transaction and deducts a commission fee.",
			img: "undraw_online_payments_re_y8f2.svg",
		},
	];
	return (
		<>
			<Container maxW="container.xl">
				<Stack my="10" spacing={20}>
					<Flex alignItems={"center"} justifyContent={"space-between"} gap={"10"}>
						<Stack w="550px" spacing="7">
							<Heading>Unlock Your Creative Potential and Monetize Your Skills with Kafkuh</Heading>
							<Text mt="5">
								Unlock Your Creative Potential, Monetize Your Skills, and Find Your Artistic Tribe
								with Kafkuh: The Innovative Web-Based Platform Connecting Talented Individuals with
								Unique Opportunities to Showcase, Collaborate, and Thrive in the World of Artistic
								Services
							</Text>
							<Flex gap={"5"}>
								<Button colorScheme="teal">Get Started</Button>
								<Button variant="ghost">learn more</Button>
							</Flex>
						</Stack>

						<Image
							src={"undraw_co-working_re_w93t.svg"}
							alt="undraw_co-working_re_w93t.svg"
							boxSize="500px"
						/>
					</Flex>

					<Stack spacing={5} justifyContent={"center"} alignItems={"center"}>
						<Button variant="link" textTransform={"uppercase"}>
							Why Kafkuh
						</Button>
						<Heading size="lg" textAlign="center">
							Empowers talents, connects creativity, and monetizes skills.
						</Heading>
						<SimpleGrid columns={3} gap={5} justifyContent={"center"} alignItems={"center"}>
							{reasons.map(({ heading, body, img }, i) => (
								<Card key={i}>
									<CardBody>
										<Center>
											<Image boxSize={200} src={img} alt="world" />
										</Center>
										<Stack spacing={3}>
											<Heading as="h3" size="md">
												{heading}
											</Heading>
											<Text fontSize="sm">{body}</Text>
										</Stack>
									</CardBody>
								</Card>
							))}
						</SimpleGrid>
					</Stack>
					<Flex alignItems="center" justifyContent="space-between" gap="5">
						<Image
							src="undraw_youtube_tutorial_re_69qc.svg"
							alt="undraw_youtube_tutorial_re_69qc.svg"
							boxSize="450px"
						/>
						<Stack maxW="600px" spacing="7">
							<Heading>Empowering Academic Success</Heading>
							<Text fontSize="lg">
								Our service offers a wide range of academic aids, including online homework help,
								essay editing, research assistance, data analysis, and statistical consulting. We
								also provide personalized online tutoring in various subjects and comprehensive test
								prep for standardized exams.
							</Text>

							<div>
								<Button mt="3" rightIcon={<AiOutlineArrowRight />}>
									Learn more
								</Button>
							</div>
						</Stack>
					</Flex>

					<Flex py="10" justifyContent={"space-between"} gap={"10"}>
						<SimpleGrid maxW="2xl" columns={2} spacing={5} textAlign={"center"}>
							{services.map(({ body, heading, img }, i) => (
								<Card key={i}>
									<Center>
										<Image src={img} boxSize="150" alt={img} />
									</Center>
									<CardBody>
										<Stack>
											<Heading size="sm">{heading}</Heading>
											<Text fontSize="xs">{body}</Text>
										</Stack>
									</CardBody>
								</Card>
							))}
						</SimpleGrid>

						<Stack justifyContent={"space-between"}>
							<Stack spacing={3}>
								<Heading size="xl">Streamlined Services for Your Commission Needs</Heading>
								<Text fontSize="lg">
									Unlock a Seamless Experience: Effortless Commission Request Submission,
									Transparent Selection Process, Real-Time Work Progress Tracking, and Secure
									Payments on Our Platform
								</Text>
								<div>
									<Button mt="3" rightIcon={<AiOutlineArrowRight />}>
										Learn more
									</Button>
								</div>
							</Stack>
							<Stack>
								<Text size="sm">Follow us</Text>
								<Flex gap="5">
									<IconButton
										aria-label="facebook"
										icon={<BsFacebook />}
										colorScheme="gray"
										size="lg"
									/>
									<IconButton
										aria-label="twitter"
										icon={<BsTwitter />}
										colorScheme="gray"
										size="lg"
									/>
									<IconButton
										aria-label="twitter"
										icon={<AiFillInstagram />}
										colorScheme="gray"
										size="lg"
									/>
								</Flex>
							</Stack>
						</Stack>
					</Flex>
					<Flex alignItems="center" justifyContent="space-between" gap="5">
						<Stack maxW="600px" spacing="7">
							<Heading>Heartfelt Donations</Heading>
							<Text fontSize="lg">
								We provide a platform for individuals to contribute to causes they care about purely
								out of the kindness of their hearts. Our service operates on a voluntary basis,
								allowing donors to contribute to various charitable projects without any obligation.
							</Text>

							<div>
								<Button mt="3" rightIcon={<AiOutlineArrowRight />}>
									Learn more
								</Button>
							</div>
						</Stack>
						<Image
							src="undraw_transfer_money_re_6o1h.svg"
							alt="undraw_transfer_money_re_6o1h.svg"
							boxSize="450px"
						/>
					</Flex>
				</Stack>
			</Container>

			<Testimonials />

			<Center h="55vh">
				<Container maxW="container.md">
					<Stack spacing="7" w="full" justifyContent={"center"} alignItems="center">
						<Heading size="3xl" textAlign="center">
							Get Started With Kafkuh
						</Heading>
						<Text textAlign="center">
							Ready to unlock your creative potential and embark on a rewarding artistic journey?
							Join Kafkuh today and take the first step towards a fulfilling and financially
							rewarding artistic journey!
						</Text>
						<Button size="lg">Join Kafkuh</Button>
					</Stack>
				</Container>
			</Center>
		</>
	);
}
