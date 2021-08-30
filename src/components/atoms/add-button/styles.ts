import styled from 'styled-components';
import theme from '@/utils/theme';
import { media } from '@/utils/global-styles';

interface IButtonStyle {
  color: string;
  width: string;
  hasIcon?: boolean;
  isRounded?: boolean;
}

export const AddButtonWrapper = styled.button<IButtonStyle>`
  align-items: center;
  background: ${props => props.color};
  border: none;

  border-radius: 50px;
  color: ${theme.colors.white};
  display: flex;
  font-weight: ${theme.weights.semibold};
  height: 50px;

  justify-content: space-around;
  left: 50%;
  outline: none;
  position: absolute;
  top: 30%;
  transform: translate(-50%, -50%);
  width: ${props => props.width};
  z-index: 2;

  ${media.smallDesktop} {
    top: 35%;
  }

  ${media.mobile} {
    top: 44%;
  }

  &:hover {
    background: ${theme.colors.red400};
    cursor: pointer;
  }
`;
