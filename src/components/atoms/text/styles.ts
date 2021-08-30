import styled from 'styled-components';
import theme from '@/utils/theme';

interface ITextP {
  color: string;
  size: string;
  bold: boolean;
}

export const TextP = styled.p<ITextP>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props =>
    props.bold ? theme.weights.semibold : theme.weights.regular};
`;
