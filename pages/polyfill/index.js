import React, { useEffect, useRef } from "react";
import { Section, Button } from "../../styles/GlobalStyles";
const index = () => {
	useEffect(() => smoothscroll.polyfill());
	console.log("polyfilled2");
	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const smoothScroll = targetRef => {
		console.log(targetRef.current);
		targetRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<br />
			<h1>Polyfill smooth scroll</h1>
			<p>
				This is the basic version of smooth scroll,it uses href tags with ids.
				Not working in Safari and IE, but its very easy to implement.
			</p>

			<Button onClick={() => smoothScroll(firstRef)}>
				<a>scroll first</a>
			</Button>
			<Button onClick={() => smoothScroll(secondRef)}>
				<a>scroll second</a>
			</Button>
			<br />
			<br />
			<Section bgcol="#ababab" ref={firstRef} />
			<Section ref={secondRef} />
			<Button>
				<a
					onClick={() => {
						window.scroll({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					scroll top
				</a>
			</Button>
		</div>
	);
};

export default index;
