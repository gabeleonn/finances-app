import theme from '@/utils/theme';
import { Text, IText } from '../text';

export function PercentageText({ text, ...rest }: IText): JSX.Element {
  return (
    <Text
      {...rest}
      text={`${text}%`}
      bold
      color={Number(text) > 100 ? theme.colors.red300 : undefined}
    />
  );
}
