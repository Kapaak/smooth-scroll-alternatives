import React from "react";
import {
	Section,
	Button,
	MainWrapper,
	HoverableH2,
	Headline,
} from "../../styles/GlobalStyles";
const index = () => {
	return (
		<MainWrapper id="top-basic">
			<br />
			<h1>Basic smooth scroll</h1>
			<p>
				This is the basic version of smooth scroll,it uses href tags with ids.
				Not working in Safari and IE, but its very easy to implement.
			</p>

			<Button>
				<a href="#first-basic">scroll first</a>
			</Button>
			<Button>
				<a href="#second-basic">scroll second</a>
			</Button>

			<Section id="first-basic">
				<Headline>
					<HoverableH2>
						<a href="#first-basic">#</a>
					</HoverableH2>
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
					<HoverableH2>
						<a href="#second-basic">#</a>
					</HoverableH2>
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

			<Section id="second-basic" />
			<Button>
				<a href="#top-basic">scroll top</a>
			</Button>
		</MainWrapper>
	);
};

export default index;
