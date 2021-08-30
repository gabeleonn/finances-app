import {
  useState,
  createContext,
  ReactNode,
  ReactChild,
  useContext,
} from 'react';

interface IUpdateContext {
  update: boolean;
  refresh: () => void;
}

interface IUpdateProvider {
  children: ReactNode | ReactChild;
}

const UpdateContext = createContext<IUpdateContext>({} as IUpdateContext);

export function UpdateProvider({ children }: IUpdateProvider): JSX.Element {
  const [update, setUpdate] = useState<boolean>(false);

  const refresh = () => {
    setUpdate(!update);
  };

  return (
    <UpdateContext.Provider
      value={{
        update,
        refresh,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
}

export const useRefresh = (): IUpdateContext => useContext(UpdateContext);
