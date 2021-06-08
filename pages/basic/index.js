import React from "react";
import { Section, Button } from "../../styles/GlobalStyles";
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
				<a href="#first-basic">scroll first</a>
			</Button>
			<Button>
				<a href="#second-basic">scroll second</a>
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
