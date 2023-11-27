import { Article } from '../interfaces/noticias';
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material';

const Noticia = ({ noticia }: { noticia: Article }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <>
      {urlToImage?.startsWith('http') && (
        <Grid
          item
          md={6}
          lg={4}
        >
          <Card>
            <CardMedia
              component={'img'}
              image={urlToImage ?? ''}
              height={200}
              alt={`Imagen de la noticia ${title}`}
            />

            <CardContent>
              <Typography
                variant={'body1'}
                color={'error'}
              >
                {source.name}
              </Typography>

              <Typography
                variant={'h5'}
                component={'div'}
              >
                {title}
              </Typography>

              <Typography variant={'body2'}>{description}</Typography>
            </CardContent>

            <CardActions>
              <Link
                href={url}
                target={'_blank'}
                variant={'button'}
                width={'100%'}
                textAlign={'center'}
              >
                Leer Noticia
              </Link>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default Noticia;
