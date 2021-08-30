import theme from '@/utils/theme';
import { ButtonWrapper } from './styles';

export interface IButton {
  text: string;
  ariaLabel: string;
  color?: string;
  backgroundColor?: string;
  backgroundColorOnHover?: string;
  colorOnHover?: string;
  width?: string;
  isRounded?: boolean;
  hasIcon?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

export function Button({
  text,
  color = theme.colors.black,
  colorOnHover = theme.colors.black,
  backgroundColor = theme.colors.white,
  backgroundColorOnHover = theme.colors.lightGray,
  width = '150px',
  ariaLabel,
  isRounded = false,
  hasIcon = false,
  icon: Icon,
  onClick,
}: IButton): JSX.Element {
  return (
    <ButtonWrapper
      type="button"
      aria-label={ariaLabel}
      color={color}
      colorOnHover={colorOnHover}
      width={width}
      isRounded={isRounded}
      hasIcon={hasIcon}
      backgroundColor={backgroundColor}
      backgroundColorOnHover={backgroundColorOnHover}
      onClick={onClick}
    >
      {text}
      {hasIcon && Icon}
    </ButtonWrapper>
  );
}
