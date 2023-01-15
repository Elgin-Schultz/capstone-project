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
    <div className="container-popup">
      <StyledButton onClick={toggleShowPopup}>
        <StyledImage
          src={"/legal--rosybrown.svg"}
          alt="Profan-Logo"
          height={50}
          width={50}
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
  padding: 10%;
  max-width: 960px;
  position: relative;

  z-index: 20;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 21;
`;
const StyledImage = styled(Image)``;
