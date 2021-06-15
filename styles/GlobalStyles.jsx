//libraries
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :root{
        --first-col: #0D1321;
        --second-col: #006d77;
        --third-col:#83c5be;
        --fourth-col:#edf6f9;
        --fowe-reg:400;
        --fowe-bold:700;

    }

    html{
        font-size:62.5%;
        /* scroll-behavior: smooth; */
    }

    body{
        font-size:1.6rem;
        font-family: 'Noto Sans', sans-serif;
        color:var(--first-col);
    }

    h1{
        padding: 5rem 0 2rem;
        font-size:4rem;
        text-align: center;
    }
    h2{
        font-size: 3rem;
    }
    p{
        font-size:2.2rem;
        letter-spacing:.1rem;
        line-height: 1.4;
    }
`;

export const Headline = styled.div`
	display: flex;

	& > h2 {
		margin-bottom: 1rem;
	}
`;

export const Section = styled.section`
	width: 100%;
	background-color: ${({ bgcol }) => (bgcol ? bgcol : "white")};
	margin: 5rem 0;
	a {
	}
`;

export const HoverableH2 = styled.h2`
	margin-right: 1rem;
	cursor: pointer;
	&:hover {
		color: var(--third-col);
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const MainWrapper = styled.div`
	max-width: 90rem;
	margin: auto;
`;

export const Button = styled.button`
	border: none;
	background-color: transparent;
	border-radius: 0.2rem;
	border: 2px solid var(--third-col);
	margin: 1.5rem 0 0.5rem;

	& + & {
		margin-left: 1rem;
	}
	a {
		display: inline-block;
		text-decoration: none;
		color: var(--first-col);
		padding: 1rem 1.5rem;
		cursor: pointer;
		font-size: 1.9rem;
		transition: all 0.2s ease;

		&:hover {
			transition: all 0.5s ease;
			color: var(--fourth-col);
			background-color: var(--third-col);
		}
	}
`;

export default GlobalStyles;
