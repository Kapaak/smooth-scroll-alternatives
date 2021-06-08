import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function Home() {
	useEffect(() => smoothscroll.polyfill());
	console.log("polyfilled");
	return (
		<>
			<h1>xx</h1>
		</>
	);
}
