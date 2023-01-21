import { createGlobalStyle } from "styled-components";

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
        @font-face {
		font-family: 'Trade Gothic Bold';
		src: url('/fonts/Trade-Gothic-LT-Bold.ttf') format('truetype');
    
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
        margin: 1rem;
        background: url('/images/stamen-map.png') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;  
}
    h1, h2, h3, h4, h5, h6 {
        font-family: Lisbon;
        margin: 0;
        max-width: 960px;
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
    *:active, :focus
    { -webkit-tap-highlight-color: transparent;}
a {
  text-decoration: none;
  color: black;
}   

button
{ background: none;
    border: none;
} 

.container-legal{
    display: inline-flex;
    align-items: flex-end;
}

.swiper-pagination {
    position: fixed;
    bottom: 0.5rem;
}

.info-card {
    background-color: white;
    padding: 1rem;
}  
.info {font-family: 'Trade Gothic';
    font-size: 1rem;}

.quote-card {
    background-color: white;
    padding: 1rem;
}  
.quote {font-family: SommerwerkInk;
    font-size: 1.5rem;
}

.source {font-family: 'Trade Gothic';
    font-size: 0.75rem;
    text-align: justify;
    
}  
.figcaption-ancient{
    font-family: SommerwerkInk;
    font-size: 1.25rem;
    padding: 1rem;
    text-align: center;
    color: #D0B3B3;
}
.credits-card{
    background-color: white;
    padding: 1rem;
}  
.mySwiper,
.mySwiper2 {
     height: 100vh;
     width: 100vw;
}   
.swiper-pagination {
    position: fixed;
    bottom: 0rem;
}
.swiper-pagination-vertical {
    z-index: 99999;
    position: fixed;
    right: 0rem;
    
}

.swiper-pagination-bullet{
    background-color: rosybrown!important;
    opacity: 90%;
    z-index: 999999;
    height: 1rem;
    width: 1rem;
}
.swiper-pagination-bullet-active{
    background-color:  #ff6080 !important;
    opacity: 0%;
    z-index: 999999;
    height: 1rem;
    width: 1rem;
}
@keyframes showing-imprint {
  from {
   
    transform: translateY(50vh);
  }
  to {
    
    transform: translateY(0);
  }
}

`;

export default GlobalStyles;
