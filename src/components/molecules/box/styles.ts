import styled from 'styled-components';
import theme from '@/utils/theme';
import { media } from '@/utils/global-styles';

export const BoxWrapper = styled.div`
  align-items: center;
  background: ${theme.colors.moss100};
  display: flex;

  height: 80px;

  padding: 20px;
  position: relative;
  width: 180px;

  ${media.smallDesktop} {
    height: 60px;
    width: 150px;
  }

  ${media.mobile} {
    height: 80px;
    width: 125px;
    padding: 10px;
  }

  svg {
    color: ${theme.colors.white};
    position: absolute;
    right: 5px;
    top: 5px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const BoxContent = styled.div``;

export const BoxPercentageBar = styled.div<{ percentage: number }>`
  background: ${props =>
    props.percentage > 100 ? theme.colors.red300 : theme.colors.moss600};
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  width: ${props => (props.percentage > 100 ? 100 : props.percentage)}%;
`;

export const BoxContentTitle = styled.p`
  color: ${theme.colors.moss500};
`;
