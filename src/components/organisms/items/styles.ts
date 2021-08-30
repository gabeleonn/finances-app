import styled from 'styled-components';
import theme from '@/utils/theme';

export const ItemsWrapper = styled.main`
  align-items: center;
  background: ${theme.colors.lightGray};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 70vh;
  padding-top: 50px;

  position: relative;
  width: 100%;
`;
