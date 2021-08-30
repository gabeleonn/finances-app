import moment from 'moment';
import 'moment/locale/pt-br';

import theme from '@/utils/theme';
import { Text } from '../text';
import { CardWrapper, CardDescription, CardDate, CardValue } from './styles';
import { useForm } from '@/contexts/form';

export interface ICard {
  id?: string;
  description: string;
  date: string;
  category: string;
  type: string;
  value: number;
}

export function Card({
  description,
  value,
  date,
  type,
  category,
  id,
}: ICard): JSX.Element {
  const { setIsFormOpen, handleForm, setIsNewEntry } = useForm();

  const handleOpenForm = () => {
    setIsNewEntry(false);
    handleForm({ description, value, date, type, category, id });
    setIsFormOpen(true);
  };

  return (
    <CardWrapper onClick={handleOpenForm}>
      <CardDescription>
        <Text
          text={description}
          color={theme.colors.black}
          size={theme.sizes.xs}
        />
        <CardDate>{moment(date).fromNow()}</CardDate>
      </CardDescription>

      <CardValue>
        <Text
          text={`${type === 'in' ? 'R$ ' : '- R$ '}${value}`}
          color={type === 'in' ? theme.colors.moss400 : theme.colors.red300}
          size={theme.sizes.xs}
        />
      </CardValue>
    </CardWrapper>
  );
}
