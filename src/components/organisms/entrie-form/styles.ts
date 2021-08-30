import styled from 'styled-components';
import theme from '@/utils/theme';
import { media } from '@/utils/global-styles';

export const FormWrapper = styled.form`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const FormContent = styled.div`
  background: ${theme.colors.lightGray};
  border-radius: 5px;
  height: fit-content;
  min-height: 400px;
  padding: 40px;
  position: relative;
  width: 30%;

  ${media.tablet} {
    width: 60%;
  }

  ${media.mobile} {
    width: 90%;
  }
`;

export const FormCloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    border-radius: 4px;
    margin-top: 20px;
  }

  .form-input {
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    height: 40px;
    padding: 2px 8px;
    width: 100%;

    &::placeholder {
      color: hsl(0, 0%, 50%);
      font-size: ${theme.sizes.xs};
    }
  }
`;

export const FormSelectGroupBadge = styled.div`
  background: #ebecf0;
  border-radius: 2em;
  color: #172b4d;
  display: inline-block;
  font-size: 12;
  font-weight: normal;
  line-height: 1;
  min-width: 1;
  padding: 0.16666666666667em 0.5em;
  text-align: center;
`;

export const FormSelectGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
