import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Imprint from "./imprint";

export default function Legal() {
  const [showPopup, setShowPopup] = useState(false);

  function toggleShowPopup() {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <StyledButton onClick={toggleShowPopup}>
        <StyledImage
          src={"/legal--rosybrown.svg"}
          alt="Paragraf-Logo"
          height={85}
          width={85}
        />
      </StyledButton>
      {showPopup ? (
        <StyledDiv>
          <Imprint />
        </StyledDiv>
      ) : null}
    </div>
  );
}

const StyledDiv = styled.div`
  background-color: white;
  opacity: 95%;
  padding: 1rem;
  position: relative;
  z-index: 20;
  width: 100dvw;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 21;
`;
const StyledImage = styled(Image)`
  transform: rotate(11deg);
`;
