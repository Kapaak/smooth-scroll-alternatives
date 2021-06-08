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


`;

export const Section = styled.section`
	height: 100vh;
	width: 100%;
	background-color: ${({ bgcol }) => (bgcol ? bgcol : "pink")};
`;

export const Button = styled.button`
	border: none;

	border-radius: 0.2rem;
	background-color: var(--third-col);

	& + & {
		margin-left: 1rem;
	}
	a {
		display: inline-block;
		color: var(--first-col);
		text-decoration: none;
		font-weight: var(--fowe-bold);
		color: var(--first-col);
		padding: 0.6rem 1.2rem;
		cursor: pointer;
	}
`;

export default GlobalStyles;
