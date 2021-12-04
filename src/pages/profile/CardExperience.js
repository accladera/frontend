import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGridPhoto() {
  return (
    <Paper sx={{ p: 4, maxWidth: 700, flexGrow: 1, my:6, }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="photoCompany" src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Nombre de la empresa
              </Typography>
              <Typography variant="body2" gutterBottom>
                Inicio y frin de la experiencia laboral
              </Typography>
              <Typography variant="body2" color="text">
                Pais
              </Typography>
              <Typography variant="body2" color="grey">
                Descripcion empresa
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}