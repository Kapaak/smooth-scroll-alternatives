import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
	return (
		<Nav>
			<NavLinks>
				<NavLink>
					<Link href="/">
						<a>Home</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link href="/basic">
						<a>Basic</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link href="/polyfill">
						<a>Polyfill</a>
					</Link>
				</NavLink>
				<NavLink>
					<Link href="/package">
						<a>Package</a>
					</Link>
				</NavLink>
			</NavLinks>
		</Nav>
	);
};

const Nav = styled.nav`
	border-bottom: 1px solid var(--third-col);
`;
const NavLinks = styled.ul`
	display: flex;
	list-style: none;
	max-width: 144rem;
	margin: auto;
`;
const NavLink = styled.li`
	padding: 1rem 2rem;
	a {
		text-decoration: none;
		color: var(--first-col);
		transition: all 0.3s ease;

		&:hover {
			color: var(--third-col);
			transition: all 0.3s ease;
		}
	}
`;

export default Navbar;
