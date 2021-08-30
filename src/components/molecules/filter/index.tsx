import { useState } from 'react';
import Select from 'react-select';

import { BiFilterAlt } from 'react-icons/bi';
import { FilterWrapper } from './styles';

export function Filter(): JSX.Element {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  return (
    <>
      {showSelect && (
        <FilterWrapper>
          Filtrar <BiFilterAlt />
        </FilterWrapper>
      )}
    </>
  );
}
