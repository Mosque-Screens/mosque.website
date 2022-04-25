import { useState, useEffect } from "react";

import styled from "styled-components";

import CaretUp from "../public/CaretUp";

const GoTopParent = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};

  .icon {
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: 5%;
    left: 90%;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    background: #aaaaaa;
    border-radius: 50%;
  }
`;

const GoTop = (props) => {
  const { topRef } = props;

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("none");

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("block");
    } else if (scrollPosition < 50) {
      return setshowGoTop("none");
    }
  };

  const handleScrollUp = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <>
      <GoTopParent display={showGoTop}>
        <div className="icon" onClick={handleScrollUp}>
          <CaretUp
            color={props.data.branding.background_color}
            bgcolor={props.data.branding.primary_color}
          />
        </div>
      </GoTopParent>
    </>
  );
};

export default GoTop;
