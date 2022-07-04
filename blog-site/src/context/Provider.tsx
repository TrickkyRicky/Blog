import { createContext, useReducer, useState, ReactNode } from "react";

interface IState {
  dark: boolean;
  toggleDark?: () => void;
}

const initialState = {
  dark: false,
};
const Context = createContext<IState>(initialState);

const Provider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(initialState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <Context.Provider value={{ dark, toggleDark }}>{children}</Context.Provider>
  );
};

export default Provider;
