import { Card, ICard } from '@/components/atoms/card';

export function CardList({ cards }: { cards: ICard[] }): JSX.Element {
  return (
    <>
      {cards?.map((card, index) => (
        <Card
          key={index}
          description={card.description}
          category={card.category}
          value={card.value}
          type={card.type}
          date={card.date}
          id={card.id}
        />
      ))}
    </>
  );
}
