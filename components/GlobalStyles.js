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
		src: url('/fonts/SommerwerkInk.otf') format('opentype');
	}
    @font-face {
		font-family: 'Trade Gothic';
		src: url('/fonts/Trade-Gothic-LT.ttf') format('truetype');
    
	}
    :root{
        --swiper-theme-color: black!important;
    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Trade Gothic';
    }
    body {
        margin: 3%;
        background: url('/images/stamen-map.png') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;  
}
    h1, h2, h3, h4, h5, h6 {
        font-family: Lisbon;
    }
    * {
        box-sizing: border-box;
    }
    p {
        max-width: 960px;
    }
    li {
        list-style: none;
        padding-left: 0px;
        max-width: 960px;
    }
    ul {
        padding-left: 0px;   
    }
a {
  text-decoration: none;
  color: black;
}    
input, button, submit
{
    background: none;
    border:none;
} 

.mark 
{background-color: rosybrown;
    
}



container-siteslist{
    flex: 1;
    
}
.container-legal{
    display: inline-flex;
    align-items: flex-end;
}
.container-popup{
    display: inline-flex;
}

.styled-legal{
    display: inline-flex;
    flex-direction: row;
}
.swiper-pagination {
}
.document{
   padding:2%;
   background-color: #D0B3B3;  
}

.quote-card {
    background-color: white;
    padding: 1rem;
}  
.quote {font-family: SommerwerkInk;
    font-size: 1.5rem;
}

.quote-source {font-family: 'Trade Gothic';
    font-size: 1rem;
    
}  
.figcaption-ancient{
    font-family: SommerwerkInk;
    font-size: 1.5rem;
    padding: 1rem;
    color: #D0B3B3;
}
.credits-card{
    background-color: white;
    padding: 1rem;
}  
.mySwiper,
.mySwiper2 {
     height: 90vh;
     width: 90vw;
}   
.swiper-pagination-bullet{
    background-color: #D0B3B3 !important;
    opacity: 80%;
    z-index: 999999;
    height: 1rem;
    width: 1rem;
}
.swiper-pagination-bullet-active{
    background-color:  grey !important;
    opacity: 80%;
    z-index: 999999;
    height: 1rem;
    width: 1rem;
}
.swiper-pagination-vertical {
    z-index: 99999
}


h1 {
    align-self: flex-start;
}
`;

export default GlobalStyles;
