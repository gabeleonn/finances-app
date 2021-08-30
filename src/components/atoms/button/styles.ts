import styled from 'styled-components';
import theme from '@/utils/theme';

interface IButtonStyle {
  color: string;
  colorOnHover: string;
  backgroundColor: string;
  backgroundColorOnHover: string;
  width: string;
  hasIcon?: boolean;
  isRounded?: boolean;
}

export const ButtonWrapper = styled.button<IButtonStyle>`
  align-items: center;
  background: ${props => props.backgroundColor};
  border: none;
  border-radius: ${props => (props.isRounded ? '50px' : '0')};
  color: ${props => props.color};
  display: flex;
  font-weight: ${theme.weights.semibold};
  height: 50px;
  justify-content: center;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: ${props => props.width};

  &:hover {
    background: ${props => props.backgroundColorOnHover};
    color: ${props => props.colorOnHover};
    cursor: pointer;
  }
`;
