import React from "react";
import { Section, Button } from "../../styles/GlobalStyles";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const index = () => {
	return (
		<div id="top-basic">
			<br />
			<h1>Basic smooth scroll</h1>
			<p>
				This is the most advanced version of smooth scroll,it uses react-scroll
				package and I can change the scroll duration and more. Working in Safari
				and IE and it takes some time to understand.
			</p>

			<Button>
				<ScrollLink to="first-basic" smooth={false}>
					scroll first
				</ScrollLink>
			</Button>
			<Button>
				<ScrollLink to="second-basic" smooth={true}>
					scroll second
				</ScrollLink>
			</Button>
			<br />
			<br />
			<Section bgcol="#ababab" id="first-basic" />
			<Section id="second-basic" />
			<Button>
				<a onClick={() => scroll.scrollToTop({ duration: 2000 })}>scroll top</a>
			</Button>
		</div>
	);
};

export default index;
