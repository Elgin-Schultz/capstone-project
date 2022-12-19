import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { useRouter } from "next/router";
import { allSites } from "../../lib/sites";

export default function singleSite() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentSite = allSites.find((site) => site.slug === slug);

  if (!currentSite) {
    return;
    <>
      <p>Hier gibt es leider nichts zu entdecken ...</p>
    </>;
  }

  return (
    <>
      <StyledContainer>
        <StyledImage
          src={currentSite.currentPicture[0]}
          alt={currentSite.adress}
          fill
        />
      </StyledContainer>
      <p>
        <StyledLink href="/singlesite">
          <Image
            src={"/profan--rosybrown.svg"}
            alt="Profan-Logo"
            height={50}
            width={50}
          />
        </StyledLink>
      </p>
    </>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const StyledContainer = styled.div`
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
