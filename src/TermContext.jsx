import { createContext, useContext } from "react";

export const TermContext = createContext(null);

export function useTermContext() {
  const value = useContext(TermContext);
  if (!value) {
    throw new Error("useTermContext must be used inside TermContext.Provider");
  }
  return value;
}
