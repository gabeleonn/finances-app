import 'moment/locale/pt-br';

import { useEffect, useState } from 'react';
import { ItemsWrapper } from './styles';
import { CardList } from '@/components/molecules/card-list';
import { ICard } from '@/components/atoms/card';
import { Filter } from '@/components/molecules/filter';
import { useRefresh } from '@/contexts/refresh';

export function Items(): JSX.Element {
  const [items, setItems] = useState<ICard[]>([]);
  const { update } = useRefresh();

  useEffect(() => {
    fetch('/api/entry', { method: 'GET' }).then(raw => {
      raw.json().then(response => {
        setItems(response.body);
      });
    });
  }, [update]);

  return (
    <ItemsWrapper>
      <Filter />
      <CardList cards={items} />
    </ItemsWrapper>
  );
}
