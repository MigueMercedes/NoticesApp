import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, ReactNode, createContext, useEffect, useState } from 'react';
import { Article, NoticiasI } from '../interfaces/noticias';

export interface NoticiasContextI {
  categoria: string;
  handleChangeCategoria: (e: SelectChangeEvent<string>) => void;
  noticias?: Article[];
  totalNoticias?: number;
  handleChangePagina: (e: ChangeEvent<unknown>, page: number) => void;
  pagina: number;
}

const NoticiasContext = createContext({} as NoticiasContextI);

const NoticiasProvider = ({ children }: { children: ReactNode }) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState<Article[]>();
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);
      const { articles, totalResults }: NoticiasI = data;

      setNoticias(articles);
      setTotalNoticias(totalResults);
      setPagina(1);
    };

    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPIByPage = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);
      const { articles, totalResults }: NoticiasI = data;

      setNoticias(articles);
      setTotalNoticias(totalResults);
    };

    consultarAPIByPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina]);

  const handleChangeCategoria = (e: SelectChangeEvent<string>) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (_e: ChangeEvent<unknown>, page: number) => {
    setPagina(page);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
