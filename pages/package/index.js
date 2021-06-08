import React from "react";
import { Section, Button } from "../../styles/GlobalStyles";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const index = () => {
	return (
		<div id="top-basic">
			<br />
			<h1>Basic smooth scroll</h1>
			<p>
				This is the basic version of smooth scroll,it uses href tags with ids.
				Not working in Safari and IE, but its very easy to implement.
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
				<a href="#top-basic">scroll top</a>
			</Button>
		</div>
	);
};

export default index;
