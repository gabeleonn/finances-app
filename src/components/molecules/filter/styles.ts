import styled from 'styled-components';
import theme from '@/utils/theme';

export const FilterWrapper = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: flex;
  gap: 10px;
  height: 80px;
  justify-content: center;
  outline: 0;

  &:hover {
    color: ${theme.colors.moss300};
    cursor: pointer;
  }
`;
