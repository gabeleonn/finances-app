import moment from 'moment';
import 'moment/locale/pt-br';
import Select, { GroupTypeBase } from 'react-select';
import { FaTimes } from 'react-icons/fa';

import { ChangeEvent } from 'react';
import { useForm } from '@/contexts/form';
import {
  FormContent,
  FormWrapper,
  FormCloseIcon,
  FormFields,
  FormSelectGroup,
  FormSelectGroupBadge,
} from './styles';
import { Button } from '@/components/atoms/button';
import theme from '@/utils/theme';
import { categoryOptions, typeOptions } from '@/utils/constants';
import { getSelectedCategory, getSelectedType } from '@/utils/functions';
import { useRefresh } from '@/contexts/refresh';

export function EntrieForm(): JSX.Element {
  const { refresh } = useRefresh();
  const {
    isFormOpen,
    setIsFormOpen,
    form,
    handleFormInput,
    isNewEntry,
    resetForm,
  } = useForm();

  const formatGroupLabel = (
    data: GroupTypeBase<{ value: string; label: string }>
  ) => (
    <FormSelectGroup>
      <FormSelectGroupBadge>{data.label}</FormSelectGroupBadge>
      <FormSelectGroupBadge>{data.options.length}</FormSelectGroupBadge>
    </FormSelectGroup>
  );

  const handleSelectChange = (value: string, name: string) => {
    handleFormInput({
      target: { name, value },
    } as ChangeEvent<HTMLInputElement>);
  };

  const handleCategorySelect = (data: any) => {
    handleSelectChange(data.value, 'category');
  };

  const handleTypeSelect = (data: any) => {
    handleSelectChange(data.value, 'type');
  };

  const handleSubmit = async () => {
    if (isNewEntry) {
      await (
        await fetch('/api/entry', {
          method: 'POST',
          body: JSON.stringify({
            ...form,
            date: moment().format('YYYY-MM-DD[T]HH:mm'),
          }),
        })
      ).json();
    } else {
      await (
        await fetch(`/api/entry?id=${form.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ ...form }),
        })
      ).json();
    }
    setIsFormOpen(false);
    resetForm();
    refresh();
  };

  const handleClose = () => {
    setIsFormOpen(false);
    resetForm();
  };

  return (
    <>
      {isFormOpen && (
        <FormWrapper>
          <FormContent>
            <FormCloseIcon onClick={handleClose}>
              <FaTimes />
            </FormCloseIcon>
            <FormFields>
              <input
                className="form-input"
                type="text"
                name="description"
                placeholder="Descrição"
                onChange={handleFormInput}
                defaultValue={isNewEntry ? undefined : form.description}
              />
              <input
                className="form-input"
                type="datetime-local"
                name="date"
                placeholder="Data"
                defaultValue={
                  isNewEntry
                    ? moment().format('YYYY-MM-DD[T]HH:mm')
                    : moment(form.date).format('YYYY-MM-DD[T]HH:mm')
                } // 2021-08-25T13:15
                onChange={handleFormInput}
              />
              <Select
                id="types"
                name="types"
                label="types"
                placeholder="Tipo"
                options={typeOptions}
                formatGroupLabel={formatGroupLabel}
                onChange={handleTypeSelect}
                defaultValue={
                  isNewEntry ? undefined : getSelectedType(form.type)
                }
              />
              <Select
                id="categories"
                name="categories"
                label="categories"
                placeholder="Categoria"
                options={
                  form.type === 'in'
                    ? categoryOptions.slice(0, 1)
                    : categoryOptions.slice(1)
                }
                onChange={handleCategorySelect}
                isDisabled={!form.type}
                defaultValue={
                  isNewEntry ? undefined : getSelectedCategory(form.category)
                }
              />
              <input
                className="form-input"
                type="text"
                name="value"
                placeholder="Valor"
                onChange={handleFormInput}
                defaultValue={isNewEntry ? undefined : form.value}
              />
              <Button
                text={isNewEntry ? 'Criar' : 'Salvar'}
                ariaLabel={isNewEntry ? 'Criar' : 'Salvar'}
                backgroundColor={theme.colors.moss100}
                backgroundColorOnHover={theme.colors.moss300}
                color={theme.colors.white}
                colorOnHover={theme.colors.white}
                width="100%"
                onClick={handleSubmit}
              />
            </FormFields>
          </FormContent>
        </FormWrapper>
      )}
    </>
  );
}
