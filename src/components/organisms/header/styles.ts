import styled from 'styled-components';
import theme from '@/utils/theme';
import { media } from '@/utils/global-styles';

export const HeaderWrapper = styled.header`
  align-items: center;
  background: ${theme.colors.moss300};
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 30vh;
  justify-content: center;
  width: 100%;

  ${media.smallDesktop} {
    height: 35vh;
  }

  ${media.mobile} {
    height: 40vh;
  }

  & .boxes {
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: center;

    ${media.mobile} {
      gap: 10px;
    }
  }
`;
