import { TooltipWrapper } from './styles';

export function Tooltip({ message }: { message: string }): JSX.Element {
  return <TooltipWrapper>{message}</TooltipWrapper>;
}
