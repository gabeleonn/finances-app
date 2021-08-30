import styled from 'styled-components';
import theme from '@/utils/theme';

export const TooltipWrapper = styled.div`
  align-items: center;
  background: ${theme.colors.lightGray};
  border-radius: 2px;
  box-shadow: 3px 0 5px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 100% 100%, 95% 90%, 0 90%);
  display: flex;
  font-size: ${theme.sizes['3xs']};
  height: 30px;
  padding: 8px;

  position: absolute;
  right: 7%;
  top: -25px;
  width: max-content;
  z-index: 2;
`;
