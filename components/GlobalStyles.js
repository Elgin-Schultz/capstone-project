import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Image from "next/image";

const GlobalStyles = createGlobalStyle`

@font-face {
		font-family: Lisbon;
		src: url('/fonts/Lisbon-CG.otf') format('opentype');
	}
    @font-face {
		font-family: SommerwerkInk;
		src: url('/fonts/SommerwerkIn.otf') format('opentype');
	}
    @font-face {
		font-family: 'Trade Gothic';
		src: url('/fonts/Trade-Gothic-LT.ttf') format('truetype');
	}
    html{
        background: url('/images/stamen-map.png') no-repeat center center fixed;
        background-size: cover;
        height: 100%;
        overflow: hidden;
        margin: 0;
        padding: 0;
        font-family: 'Trade Gothic';
    }
    body {
        margin: 0;
        padding: 5%;
}
    h1, h2, h3, h4, h5, h6 {
        font-family: Lisbon;
        
    }
    * {
        box-sizing: border-box;
        
    }
    li {
        list-style: none;
        padding-left: 0px;
        
    }
    ul {
        padding-left: 0px;   
    }
    

mark { background-color: white;

}
li mark {
    background-color: rosybrown;
}

    a {
  text-decoration: none;


}

`;

export default GlobalStyles;
