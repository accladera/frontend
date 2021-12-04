import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ModalRequestJob from './ModalRequestJob'

function CardJob(props) {
  const { post } = props;

  return (
    <Grid spacing={15} item xs={12} md={6}>
      <CardActionArea component="" href="#">
        <Card sx={{ display: 'flex', height: 200, width: 1000 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography sx={{ paddingBottom: 1 }} component="h2" variant="h5">
              Nombre del empleo: {post.nombre}
            </Typography>
            <Typography sx={{ py: 1 }} variant="subtitle1" color="text.secondary">
              Descripcion del empleo: {post.descripcion}
            </Typography>
            <Typography sx={{ py: 1 }} variant="subtitle1" paragraph>
              Salario del empleo: {post.salario}
            </Typography>
            <ModalRequestJob></ModalRequestJob>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

CardJob.propTypes = {
  post: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    salario: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardJob;