import { Typography, Grid, TablePagination } from '@mui/material';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
  const { noticias } = useNoticias();

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
        {noticias?.map(noticia => (
          <Noticia
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </Grid>

      <TablePagination
        component='div'
        count={100}
        page={1}
        // onPageChange={handleChangePage}
        // rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ListadoNoticias;
