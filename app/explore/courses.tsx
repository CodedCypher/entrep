import Carousel from "react-multi-carousel";
import CourseCard from "../components/courseCard";

export default function Course() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			partialVisibilityGutter: 40,
			// slidesToSlide: 2, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			// slidesToSlide: 2, // optional, default to 1.
			partialVisibilityGutter: 30,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 3,
			// slidesToSlide: 2, // optional, default to 1.
		},
	};
	const courses = [
		{
			title: "Digital Marketing Mastery: Strategies for Success",
			author: "Sarah Johnson",
			about:
				"Digital marketing expert with 10+ years of experience; Founder of a successful digital agency; Featured in Forbes and Business Insider.",
			price: "99$",
			best_seller: true,
			rating: 4.5,
			rated_count: 120,
			duration: "12 hours",
		},
		{
			title: "Graphic Design Fundamentals: From Concept to Creation",
			author: "Emily Thompson",
			about:
				"Award-winning graphic designer; Worked with top brands like Apple and Nike; Instructor at a renowned design school.",
			price: "79$",
			best_seller: false,
			rating: 4.2,
			rated_count: 80,
			duration: "8 hours",
		},
		{
			title: "Web Development 101: Building Modern Websites",
			author: "Michael Anderson",
			about:
				"Experienced web developer; Co-founder of a web development agency; Published articles on web development in leading tech blogs.",
			price: "89$",
			best_seller: true,
			rating: 4.7,
			rated_count: 150,
			duration: "10 hours",
		},
		{
			title: "Social Media Marketing: Mastering the Power of Platforms",
			author: "Alexis Rodriguez",
			about:
				"Social media strategist with a strong track record; Helped businesses grow their online presence; Speaker at major marketing conferences.",
			price: "79$",
			best_seller: false,
			rating: 4.0,
			rated_count: 95,
			duration: "6 hours",
		},
		{
			title: "Photography for Beginners: Capturing Moments with Style",
			author: "Jessica Collins",
			about:
				"Professional photographer with a portfolio of stunning images; Photography instructor at a prestigious art school; Published in National Geographic.",
			price: "69$",
			best_seller: true,
			rating: 4.8,
			rated_count: 200,
			duration: "14 hours",
		},
		{
			title: "Content Writing: Crafting Compelling Stories that Engage",
			author: "David Thompson",
			about:
				"Renowned content writer; Contributed articles to leading publications; Experienced editor for major publishing houses.",
			price: "59$",
			best_seller: false,
			rating: 4.3,
			rated_count: 110,
			duration: "9 hours",
		},
	];

	return (
		<Carousel
			additionalTransfrom={0}
			arrows
			swipeable={true}
			draggable={true}
			showDots={false}
			autoPlay={true}
			autoPlaySpeed={5000}
			responsive={responsive}
			ssr={true} //means to render carousel on server-side.
			infinite={true}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-23-px">
			{courses.map((c, i) => (
				<CourseCard id={i} {...c} key={i} />
			))}
		</Carousel>
	);
}
