import {
  useState,
  createContext,
  ReactNode,
  ReactChild,
  useContext,
  ChangeEvent,
} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

interface IForm {
  id?: string;
  description: string;
  date: string;
  category: string;
  type: string;
  value: number;
}

interface IFormContext {
  isNewEntry: boolean;
  isFormOpen: boolean;
  setIsNewEntry: (value: boolean) => void;
  resetForm: () => void;
  setIsFormOpen: (value: boolean) => void;
  form: IForm;
  handleForm: (data: IForm) => void;
  handleFormInput: (value: ChangeEvent<HTMLInputElement>) => void;
}

interface IFormProvider {
  children: ReactNode | ReactChild;
}

const FormContext = createContext<IFormContext>({} as IFormContext);

export function FormProvider({ children }: IFormProvider): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNewEntry, setIsNewEntry] = useState<boolean>(true);
  const [form, setForm] = useState<IForm>({} as IForm);

  const resetForm = () => {
    setForm({
      id: '',
      description: '',
      date: '',
      category: '',
      type: '',
      value: 0,
    });
  };

  const handleFormInput = ({
    target: { value, name },
  }: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleForm = (data: IForm) => {
    setForm({ ...form, ...data });
  };

  return (
    <FormContext.Provider
      value={{
        isFormOpen: isOpen,
        setIsFormOpen: setIsOpen,
        form,
        handleForm,
        handleFormInput,
        isNewEntry,
        setIsNewEntry,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useForm = (): IFormContext => useContext(FormContext);
