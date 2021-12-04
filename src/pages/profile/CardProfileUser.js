import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ProfileModal from './ModalProfile';

function CardProfileUser(props) {
  const { post } = props;

  return (
    <Grid spacing={15} item xs={12} md={6}>
      <CardActionArea component="" href="#">
        <Card sx={{ display: 'flex', height: 200, width: 1000 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography sx={{paddingBottom:1}} component="h2" variant="h5">
              {post.nombre}
            </Typography>
            <Typography sx={{py:1}} variant="subtitle1" color="text.secondary">
              {post.pais}
            </Typography>
            <Typography sx={{py:1}} variant="subtitle1" paragraph>
              {post.ciudad}
            </Typography>
            <ProfileModal></ProfileModal>
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

CardProfileUser.propTypes = {
  post: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    ciudad: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProfileUser;