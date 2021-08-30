import styled from 'styled-components';
import theme from '@/utils/theme';
import { media } from '@/utils/global-styles';

export const CardWrapper = styled.div`
  align-items: center;
  background: ${theme.colors.gray600};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  padding: 20px 30px;
  transition: all 0.3s ease-in-out;

  width: 50vw;

  ${media.mobile} {
    width: 90%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 50px;
  }
`;

export const CardDescription = styled.div`
  text-transform: capitalize;
`;

export const CardDate = styled.div`
  color: ${theme.colors.gray400};
  font-size: ${theme.sizes['2xs']};
  margin-top: 10px;
`;

export const CardValue = styled.div``;
