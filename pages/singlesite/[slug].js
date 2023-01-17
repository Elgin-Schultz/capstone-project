import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { allSites } from "../../lib/data-sites";

export default function singleSite() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentSite = allSites.find((site) => site.slug === slug);
  const siteCurrents = currentSite.currentPicture;

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
      >
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
          >
            <StyledSwiperSlide>
              <div className="info-card">
                <h2>
                  {currentSite.coordinates[0] +
                    " | " +
                    currentSite.coordinates[1]}{" "}
                </h2>
                <h2>{currentSite.adress}</h2>
                <p className="info">{currentSite.information[0]}</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div className="info-card">
                <p className="info">{currentSite.information[1]}</p>
              </div>
            </StyledSwiperSlide>
          </Swiper>
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
          >
            {siteCurrents.map((current) => (
              <StyledSwiperSlide>
                <StyledImage
                  className="current-picture"
                  src={current}
                  alt={currentSite.adress}
                  height={200}
                  width={300}
                />
              </StyledSwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledFigure2>
            <StyledImage
              className="document"
              src={currentSite.document}
              alt={currentSite.adress}
              height={200}
              width={300}
            />
            <p className="source">{currentSite.documentSource}</p>
          </StyledFigure2>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="quote-card">
            <p className="quote">{currentSite.quote}</p>
            <p className="source">{currentSite.quoteSource}</p>
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
                <h2>{currentSite.creditsCaption}</h2>
                <ul className="credits-list">
                  <li>{currentSite.credits[0]}</li>
                  <li>{currentSite.credits[1]}</li>
                  <li>{currentSite.credits[2]}</li>
                  <li>{currentSite.credits[3]}</li>
                  <li>{currentSite.credits[4]}</li>
                </ul>
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
  width: 100%;
  height: 100%;
  transform: translateZ(0);
`;

const StyledContainer = styled.div`
  display: flex;
`;
const StyledFigure = styled.figure`
  display: flex;
  object-fit: contain;
  width: 100%;
  height: auto;
  transform: translateZ(0);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-flow: column;
  text-indent: 0;
  background-color: black;
  margin: 1rem;
  padding: 1rem;
`;
const StyledFigure2 = styled.figure`
  display: flex;
  object-fit: contain;
  width: 100%;
  height: auto;
  transform: translateZ(0);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-flow: column;
  text-indent: 0;
  background-color: rosybrown;
  margin: 1rem;
  padding: 1rem;
`;
const StyledLink = styled(Link)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 31;
`;
