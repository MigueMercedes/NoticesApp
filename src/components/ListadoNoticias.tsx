import { Grid, Pagination, Stack, Typography } from '@mui/material';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  const totalPaginas = Math.ceil((totalNoticias || 1) / 20);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        component={'h2'}
        variant={'h3'}
      >
        Ultimas Noticias
      </Typography>

      <Grid
        container
        spacing={2}
      >
        {noticias?.map((noticia, index) => (
          <Noticia
            key={`${noticia.url}-${index}`}
            noticia={noticia}
          />
        ))}
      </Grid>

      <Stack
        spacing={2}
        mt={5}
        direction={'row'}
        justifyContent={'center'}
      >
        <Pagination
          count={totalPaginas}
          color='primary'
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>

      {/* <TablePagination
        component='div'
        count={100}
        page={1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </>
  );
};

export default ListadoNoticias;
