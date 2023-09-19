import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { device } from '../../Constants';

export const Section = styled.div`
  outline: 1px solid rgba(239, 237, 232, 0.3);
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  background-position: left 100% top 100%;
  background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    image-set(
      url('/project-ironbody-ui/side-view-people-training-gym-mobile@1x.jpg') 1x,
      url('/project-ironbody-ui/side-view-people-training-gym-mobile@2x.jpg') 2x
    );

  @media screen and (min-width: 375px) {
    position: relative;
    width: var(--width-mobile);
    height: 812px;
    overflow: hidden;
    background-position: left 100% top 100%;

    color: var(--white);
    font-family: var(--headline-style-mobile-h1);

    background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-mobile@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-mobile@2x.jpg') 2x
      );

    background-repeat: no-repeat;
  }

  @media screen and (min-width: 768px) {
    max-width: var(--width-tablet);
    width: var(--width-tablet);
    height: 1024px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-tablet@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-tablet@2x.jpg') 2x
      );
    background-repeat: no-repeat;
    background-position: left 100% top 100%;
  }

  @media screen and (min-width: 1440px) {
    max-width: var(--width-desktop);
    width: var(--width-desktop);
    height: 800px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      image-set(
        url('/project-ironbody-ui/side-view-people-training-gym-desktop@1x.jpg') 1x,
        url('/project-ironbody-ui/side-view-people-training-gym-desktop@2x.jpg') 2x
      );

    background-repeat: no-repeat;
    background-position: left 100% top 100%;
  }
`;

export const Left = styled.div`
  background: #e6533c;
  max-width: calc(64%);
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 420px;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`;

export const Content = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title404 = styled.h1`
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`;

export const Text404 = styled.p`
  /* width: 200px; */
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;

// export const StyledLink = styled(Link)`
//   position: absolute;
//   left: 32px;
//   top: 32px;

//   @media screen and (min-width: 1440px) {
//     left: 96px;
//   }
// `;

// export const Svg = styled.svg`
//   width: 126px;
//   height: 13px;

//   @media screen and (min-width: 768px) {
//     width: 152px;
//     height: 17px;
//   }
// `;

export const Button = styled.button`
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  background-color: #e6533c;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out;

  &:hover {
    color: white;
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
