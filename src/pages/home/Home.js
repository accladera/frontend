import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CURRICULUM_INDICE } from 'navigation/CONSTANTS';
import { LOGIN } from 'navigation/CONSTANTS';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../../utils/Banner';
import { PERFIL_CLIENTE, DETALLE_EMPLEO } from 'navigation/CONSTANTS';
import { useSelector } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        TrabajoYa!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const bannerContent = {
  title: 'TrabajoYa!',
  description:
    "Nuestra mision es sencilla: conectar a profesionales para ayudarles a ser más productivos y a alcanzar todas sus metas laborales..",
  image: 'https://png.pngtree.com/background/20210711/original/pngtree-2-5d-axonometric-business-desk-work-banner-picture-image_1126034.jpg',
  imageText: 'Encuestra tu empleo con nosotros',
  linkText: 'Seguir leyendo…',
};

const theme = createTheme();

export default function Home() {

  let history = useHistory();
  const sesion = useSelector(state => state.sesion);

  const [listaEmpleos, setListaEmpleos] = useState([]);

  useEffect(() => {
    loadEmpleos();
  }, [])

  const loadEmpleos = () => {

    Axios.get("https://localhost:5005/api/business/job/list")
      .then((response) => {
        console.log(response.data);
        setListaEmpleos(response.data);
      }).catch(error => {

        console.log(error.response);
        alert(error.response)

      });
  }

  const verificarUsuario = () => {
    // const idUsuario = localStorage.getItem("userId");
    // console.log("ID DEL USUARIO", idUsuario);
    // if (idUsuario !== null) {
    if (sesion) {
      history.push(CURRICULUM_INDICE);
    } else {
      alert("Debe iniciar sesion para crear un curriculum");
      history.push(LOGIN);
    }
  }

  const verificarUsuarioPerfil = () => {
    const idUsuarioPerfil = localStorage.getItem("userId");
    console.log("ID DEL USUARIO PARA VER EL PERFIL", idUsuarioPerfil);
    if (idUsuarioPerfil !== null) {
      history.push(PERFIL_CLIENTE);
    } else {
      alert("Debe iniciar sesion para ver su perfil");
      history.push(LOGIN);
    }
  }

  const verEmpleo = (idEmpleo) => {
    localStorage.setItem("jobId", idEmpleo);
    console.log("Se ha guardado el id del empleo clickeado", idEmpleo);
    history.push(DETALLE_EMPLEO);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ marginBottom: 5 }} >
        <AppBar position="">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Pagina principal
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
      <Banner post={bannerContent} />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Encuentra los mejores empleos en nuestra plataforma, a continuacion se te muestran algunos.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={5}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => verificarUsuario()} >Crear curriculum</Button>
              <Button variant="contained" onClick={() => verificarUsuarioPerfil()} >Ver perfil</Button>
              <Button variant="contained">Buscar empresas</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 10 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {listaEmpleos.map((item) => (
              <Grid item key={item.id} xs={5} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '15%',
                    }}
                    image="https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg"
                    alt="photoJob"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>
                      Descripcion: {item.description}
                    </Typography>
                    <Typography>
                      Salario: {item.salary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => verEmpleo(item.id)}>Ver empleo</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container align="center">
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          image="https://i.ibb.co/F5NwFJL/footer.png"
          alt="footer"
        />
         </Container>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Todos los derechos reservados
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
