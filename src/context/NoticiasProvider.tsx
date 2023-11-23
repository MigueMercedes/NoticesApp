import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { NoticiasI } from '../interfaces/noticias';

export interface NoticiasContextI {
  categoria: string;
  handleChangeCategoria: (e: SelectChangeEvent<string>) => void;
  noticias: NoticiasI[];
}

const NoticiasContext = createContext({} as NoticiasContextI);

const NoticiasProvider = ({ children }: { children: ReactNode }) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState<NoticiasI[]>([]);

  useEffect(() => {
    const consuletarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);

      setNoticias(data);
    };

    consuletarAPI();
  }, [categoria]);

  const handleChangeCategoria = (e: SelectChangeEvent<string>) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
