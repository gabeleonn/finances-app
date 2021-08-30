import { OptionTypeBase } from 'react-select';
import { categoryOptions, typeOptions } from './constants';

export function getSelectedCategory(value: string): OptionTypeBase {
  let toReturn = {};
  categoryOptions.forEach(group => {
    group.options.forEach(category => {
      if (category.value === value) {
        toReturn = category;
      }
    });
  });

  return toReturn;
}

export function getSelectedType(value: string): OptionTypeBase {
  return typeOptions.filter(type => type.value === value);
}

export function getPercentage(ins: number, compared: number): number {
  return (compared / ins) * 100;
}
