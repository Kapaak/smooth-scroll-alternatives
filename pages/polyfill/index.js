import { useEffect, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";
//styles
import {
	Section,
	Button,
	MainWrapper,
	Headline,
	HoverableH2,
} from "../../styles/GlobalStyles";

const index = () => {
	useEffect(() => smoothscroll.polyfill());

	const firstRef = useRef(null);
	const secondRef = useRef(null);

	const smoothScroll = targetRef => {
		targetRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<MainWrapper>
			<br />
			<h1>Polyfill smooth scroll</h1>
			<p>
				This is an advanced version of smooth scroll,it uses JS method
				scrollIntoView + polyfill. Working in Safari and IE, very easy to
				implement.
			</p>

			<Button onClick={() => smoothScroll(firstRef)}>
				<a>scroll first</a>
			</Button>
			<Button onClick={() => smoothScroll(secondRef)}>
				<a>scroll second</a>
			</Button>

			<Section ref={firstRef}>
				<Headline>
					<HoverableH2 onClick={() => smoothScroll(firstRef)}>#</HoverableH2>
					<h2>First Paragraph</h2>
				</Headline>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
					facere accusantium reiciendis iste nisi sit culpa debitis eaque
					impedit ducimus ut doloremque saepe, aspernatur, nobis facilis ipsum
					praesentium temporibus aperiam! Ut, recusandae? Aliquam similique
					velit perspiciatis voluptatem dolorum debitis perferendis error
					beatae? Nulla, excepturi eum sapiente facere nisi, perspiciatis dolore
					repudiandae beatae velit reiciendis, laboriosam quis sunt. Doloremque,
					accusamus suscipit? Quibusdam atque, quas veritatis odit quisquam
					culpa ratione consectetur delectus libero amet iste dolor est nulla
					reprehenderit? Autem incidunt est consectetur eligendi. Similique
					alias laborum soluta. In possimus cupiditate pariatur. Ipsam nesciunt
					vero quo illum eaque labore quia consequuntur sequi soluta eligendi
					libero aliquam vel ipsum suscipit reiciendis odit eveniet, animi
					explicabo facere officia? Eligendi eius explicabo quod praesentium
					perspiciatis? Architecto ad sapiente, quos laudantium ipsum sit
					obcaecati illo iure a officiis, enim nesciunt. Dolor, earum qui quos
					fugiat accusantium quis harum odio aperiam inventore. Ullam libero sit
					facilis dolorem.
				</p>
			</Section>
			<Section ref={secondRef}>
				<Headline>
					<HoverableH2 onClick={() => smoothScroll(secondRef)}>#</HoverableH2>
					<h2>Second Paragraph</h2>
				</Headline>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
					facere accusantium reiciendis iste nisi sit culpa debitis eaque
					impedit ducimus ut doloremque saepe, aspernatur, nobis facilis ipsum
					praesentium temporibus aperiam! Ut, recusandae? Aliquam similique
					velit perspiciatis voluptatem dolorum debitis perferendis error
					beatae? Nulla, excepturi eum sapiente facere nisi, perspiciatis dolore
					repudiandae beatae velit reiciendis, laboriosam quis sunt. Doloremque,
					accusamus suscipit? Quibusdam atque, quas veritatis odit quisquam
					culpa ratione consectetur delectus libero amet iste dolor est nulla
					reprehenderit? Autem incidunt est consectetur eligendi. Similique
					alias laborum soluta. In possimus cupiditate pariatur. Ipsam nesciunt
					vero quo illum eaque labore quia consequuntur sequi soluta eligendi
					libero aliquam vel ipsum suscipit reiciendis odit eveniet, animi
					explicabo facere officia? Eligendi eius explicabo quod praesentium
					perspiciatis? Architecto ad sapiente, quos laudantium ipsum sit
					obcaecati illo iure a officiis, enim nesciunt. Dolor, earum qui quos
					fugiat accusantium quis harum odio aperiam inventore. Ullam libero sit
					facilis dolorem.
				</p>
			</Section>
			<Button>
				<a
					onClick={() => {
						window.scroll({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					scroll top
				</a>
			</Button>
		</MainWrapper>
	);
};

export default index;
