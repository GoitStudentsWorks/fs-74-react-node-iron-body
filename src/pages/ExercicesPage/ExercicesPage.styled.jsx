import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;

  margin-top: 65px;
  /* padding: 20px; */
  // background-color:blue;

  @media screen and (${device.mobile}) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-x: hidden;
  }
  @media screen and (${device.tablet}) {
    margin-top: 40px;
    padding: 0;
    /* margin-top: 72px; */
    width: 768px;
    /* padding-left: 32px;
    padding-right: 32px; */
    margin-top: 156px;
  }
  @media screen and (${device.desktop}) {
    width: var(--width-desktop);
    padding: 0;

    // height: 800px;
    // overflow: hidden;
    // color: var(--white);
    // font-family: var(--headline-style-mobile-h1);
    // background-image: url('/project-ironbody-ui/side-view-people-training-gym-2x.png');
    // background-repeat: no-repeat;
    // background-position: 981px 67px;
    // background-size: 438px;
  }
`;


export const NameExercise = styled.div`
  color:var(--white);
font-size:24px;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

  export const ButtonIcon = styled.img`
  display: block;

  border-radius: var(--br-1px);
  width: 24px;
  height: 24px;
  @media ${device.tablet} {
  
    border-radius: var(--br-1px);
    width: 36px;
    height: 24px;
  }
  @media ${device.desktop} {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;

export const ButtonItem = styled.button`
  color: #e6533c;
  font-size: 16px;
  line-height: 1.5;
  background: inherit;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const Title = styled.div`
  /* margin-left: 20px; */
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const NavigateContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  @media ${device.tablet} {
    flex-direction: row;
    width: ${768 - 64}px;
    margin-bottom: 64px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    width: 1240px;
    padding: 0 96px 0 96px;
    margin-bottom: 64px;
  }
`;
