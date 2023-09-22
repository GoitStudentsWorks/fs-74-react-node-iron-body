import styled from 'styled-components';
import { device } from '../../Constants';

const StyledTitlePage = styled.h1`
  color: #efede8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.8;
    margin: 0px 0 32px 0;
  }
`;

export default StyledTitlePage;
