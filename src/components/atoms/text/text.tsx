import theme from '@/utils/theme';
import { TextP } from './styles';

export interface IText {
  text: string;
  color?: string;
  size?: string;
  bold?: boolean;
}

export function Text({
  text,
  color = theme.colors.white,
  size = theme.sizes.md,
  bold = false,
}: IText): JSX.Element {
  return (
    <TextP color={color} size={size} bold={bold}>
      {text}
    </TextP>
  );
}
