import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Article, NoticiasI } from '../interfaces/noticias';

export interface NoticiasContextI {
  categoria: string;
  handleChangeCategoria: (e: SelectChangeEvent<string>) => void;
  noticias?: Article[];
}

const NoticiasContext = createContext({} as NoticiasContextI);

const NoticiasProvider = ({ children }: { children: ReactNode }) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState<Article[]>();
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);
      const { articles, totalResults }: NoticiasI = data;

      setNoticias(articles);
      setTotalNoticias(totalResults);
    };

    consultarAPI();
  }, [pagina, categoria]);

  const handleChangeCategoria = (e: SelectChangeEvent<string>) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
