import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
//styles
import {
	Section,
	Button,
	MainWrapper,
	Headline,
	HoverableH2,
} from "../../styles/GlobalStyles";

const index = () => {
	return (
		<MainWrapper id="top-basic">
			<br />
			<h1>Package smooth scroll</h1>
			<p>
				This is the most advanced version of smooth scroll,it uses react-scroll
				package and I can change the scroll duration and more. Working in Safari
				and IE and it takes some time to understand.
			</p>

			<Button>
				<ScrollLink to="first-basic" smooth={true}>
					scroll first
				</ScrollLink>
			</Button>
			<Button>
				<ScrollLink to="second-basic" smooth={false}>
					scroll second
				</ScrollLink>
			</Button>

			<Section id="first-basic">
				<Headline>
					<ScrollLink to="first-basic" smooth={false}>
						<HoverableH2>#</HoverableH2>
					</ScrollLink>
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
			<Section id="second-basic">
				<Headline>
					<ScrollLink to="second-basic" smooth={true}>
						<HoverableH2>#</HoverableH2>
					</ScrollLink>
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
				<a onClick={() => scroll.scrollToTop({ duration: 2000 })}>scroll top</a>
			</Button>
		</MainWrapper>
	);
};

export default index;
