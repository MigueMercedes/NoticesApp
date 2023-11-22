import { ReactNode, createContext } from "react";

const NoticiasContext = createContext({});

const NoticiasProvider = ({children}: {children: ReactNode}) => {
  return (
    <NoticiasContext.Provider
      value={{

      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export {
  NoticiasProvider
}

export default NoticiasContext;
