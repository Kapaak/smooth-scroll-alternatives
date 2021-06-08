import Navbar from "../components/Navbar";
import GlobalStyles from "../styles/GlobalStyles";
import smoothscroll from "smoothscroll-polyfill";

function MyApp({ Component, pageProps }) {
	smoothscroll.polyfill();
	console.log("polyfilled");

	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
