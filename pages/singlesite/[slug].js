import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { allSites } from "../../lib/sites";

export default function singleSite() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentSite = allSites.find((site) => site.slug === slug);

  if (!currentSite) {
    return (
      <>
        <p>Hier gibt es leider nichts zu entdecken ...</p>
      </>
    );
  }

  return (
    <StyledContainer>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <StyledSwiperSlide>
          <StyledImage
            className="document"
            src={currentSite.document}
            alt={currentSite.adress}
            height={200}
            width={300}
          />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <StyledSwiperSlide>
              <StyledImage
                className="current-picture"
                src={currentSite.currentPicture[0]}
                alt={currentSite.adress}
                height={200}
                width={300}
              />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StyledImage
                className="current-picture"
                src={currentSite.currentPicture[1]}
                alt={currentSite.adress}
                height={200}
                width={300}
              />
            </StyledSwiperSlide>
          </Swiper>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="quote-card">
            <p className="quote">{currentSite.quote}</p>
            <p className="quote-source">{currentSite.quoteSource}</p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <StyledSwiperSlide>
              <StyledFigure>
                <StyledImage
                  className="ancient-picture"
                  src={currentSite.ancientPicture[0]}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />

                <figcaption className="figcaption-ancient">
                  {currentSite.ancientCaption[0]}
                </figcaption>
              </StyledFigure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StyledFigure>
                <StyledImage
                  className="ancient-picture"
                  src={currentSite.ancientPicture[1]}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />
                <figcaption className="figcaption-ancient">
                  {currentSite.ancientCaption[1]}
                </figcaption>
              </StyledFigure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StyledFigure>
                <StyledImage
                  className="ancient-picture"
                  src={currentSite.ancientPicture[2]}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />
                <figcaption className="figcaption-ancient">
                  {currentSite.ancientCaption[2]}
                </figcaption>
              </StyledFigure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StyledFigure>
                <StyledImage
                  className="ancient-picture"
                  src={currentSite.ancientPicture[3]}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />
                <figcaption className="figcaption-ancient">
                  {currentSite.ancientCaption[3]}
                </figcaption>
              </StyledFigure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StyledFigure>
                <StyledImage
                  className="ancient-picture"
                  src={currentSite.ancientPicture[4]}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />
                <figcaption className="figcaption-ancient">
                  {currentSite.ancientCaption[4]}
                </figcaption>
              </StyledFigure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <div className="credits-card">
                <h2>
                  {currentSite.creditsCaption + ": "}
                  {currentSite.coordinates[0] +
                    " | " +
                    currentSite.coordinates[1]}
                </h2>
                <p className="credits">
                  {currentSite.credits[0]}
                  <br />
                  {currentSite.credits[1]}
                  <br />
                  {currentSite.credits[2]}
                  <br />
                  {currentSite.credits[3]}
                  <br />
                  {currentSite.credits[4]}
                </p>
              </div>
            </StyledSwiperSlide>
          </Swiper>
        </StyledSwiperSlide>
      </Swiper>

      <StyledLink href="/singlesite">
        <Image
          src={"/profan--rosybrown.svg"}
          alt="Profan-Logo"
          height={50}
          width={50}
        />
      </StyledLink>
    </StyledContainer>
  );
}

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  display: block;
  object-fit: contain;
  width: 80% !important;
  height: 80% !important;
  transform: translateZ(0);
`;

const StyledContainer = styled.div`
  display: flex;
`;
const StyledFigure = styled.figure`
  display: flex;
  object-fit: contain;
  width: 80% !important;
  height: 80% !important;
  transform: translateZ(0);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-flow: column;
  text-indent: 0;
  background-color: black;
  padding: 5%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: right;
  margin: 1vw; ;
`;
