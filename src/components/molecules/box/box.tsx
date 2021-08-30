import { useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import {
  BoxWrapper,
  BoxContent,
  BoxContentTitle,
  BoxPercentageBar,
} from './styles';

import { PercentageText } from '@/components/atoms/percentage-text';
import { Tooltip } from '@/components/atoms/tooltip';

interface IBox {
  title: string;
  percentage: number;
  info: string;
}

export function Box({ title, percentage, info }: IBox): JSX.Element {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <BoxWrapper>
      <BoxContent>
        <BiInfoCircle
          height="20px"
          width="20px"
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        />
        {showTooltip && <Tooltip message={info} />}
        <BoxContentTitle>{title}</BoxContentTitle>
        <PercentageText text={percentage.toString()} />
      </BoxContent>
      <BoxPercentageBar percentage={percentage} />
    </BoxWrapper>
  );
}
