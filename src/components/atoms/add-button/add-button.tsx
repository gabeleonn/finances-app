import { BiPlus } from 'react-icons/bi';
import theme from '@/utils/theme';
import { AddButtonWrapper } from './styles';
import { useForm } from '@/contexts/form';

export interface IAddButton {
  text: string;
  ariaLabel: string;
  color?: string;
  width?: string;
  isRounded?: boolean;
}

export function AddButton({
  text,
  color = theme.colors.red300,
  width = '150px',
  ariaLabel,
  isRounded = false,
}: IAddButton): JSX.Element {
  const { setIsFormOpen, setIsNewEntry } = useForm();

  const handleClick = () => {
    setIsNewEntry(true);
    setIsFormOpen(true);
  };
  return (
    <AddButtonWrapper
      type="button"
      aria-label={ariaLabel}
      color={color}
      width={width}
      isRounded={isRounded}
      onClick={handleClick}
    >
      {text} <BiPlus size={24} color={theme.colors.white} />
    </AddButtonWrapper>
  );
}
