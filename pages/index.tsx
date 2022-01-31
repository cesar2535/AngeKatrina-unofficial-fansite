import React, { useState } from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../constants/colors";
import PageWrapper from "../components/templates/PageWrapper";
import Logo from "../components/atomics/common/Logo";
import HomeBG from "../components/organisms/home/HomeBG";
import HomeAnge from "../components/organisms/home/HomeAnge/HomeAnge";
import CircleSlide from "../components/organisms/home/CircleSlide/CircleSlide";
import NavBar from "../components/organisms/common/NavBar/NavBar";
import HamburgerMenu from "../components/atomics/common/HamburgerMenu/HamburgerMenu";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const Home: React.FC = () => {
  const [isOpenNavBar, changeIsOpenNavBar] = useState(false);
  return (
    <PageWrapper>
      <Wrapper>
        <HomeBG>
          <CircleSlide />
          <Logo bgColor="white" />
          <HomeAnge />
          <HamburgerMenu
            onClickFC={() => {
              changeIsOpenNavBar(true);
            }}
          />
          <NavBar
            isOpen={isOpenNavBar}
            onClose={() => {
              changeIsOpenNavBar(false);
            }}
          />
        </HomeBG>
      </Wrapper>
    </PageWrapper>
  );
};

export default Home;
