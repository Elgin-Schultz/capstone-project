import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { allSites } from "../../lib/sites";

export default function singleSite() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentSite = allSites.find((site) => site.slug === slug);
  const picture = currentSite.currentPicture;

  if (!currentSite) {
    return;
    <>
      <p>Hier gibt es leider nichts zu entdecken ...</p>
    </>;
  }

  return (
    <>
      <StyledContainer>
        <StyledImage src={picture[0]} alt={currentSite.adress} fill />
      </StyledContainer>
      <StyledButton>Back</StyledButton>
    </>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledContainer = styled.div`
  overflow: hidden;
`;
