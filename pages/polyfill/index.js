import { useEffect, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";
//styles
import { Section, Button } from "../../styles/GlobalStyles";

const index = () => {
	useEffect(() => smoothscroll.polyfill());

	const firstRef = useRef(null);
	const secondRef = useRef(null);

	const smoothScroll = targetRef => {
		targetRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
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
