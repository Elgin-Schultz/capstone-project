import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

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
          <h2>Impressum</h2>
          <p>
            Angaben gemäß § 5 TMG, redaktionell verantwortlich:
            <ul>
              <li>Elgin Schultz</li>
              <li>Felix-Dahn-Str. 4</li>
              <li>20357 Hamburg</li>
              <li>E-Mail: elgin@elginschultz.com</li>
            </ul>
          </p>
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
  top: -25vh;
`;

const StyledButton = styled.button`
  flex: 0;
  align-self: flex-start;
`;
const StyledImage = styled(Image)`
  z-index: 9999;
`;
