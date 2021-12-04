import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardProfileUser from './CardProfileUser';
import Main from '../../utils/Tittle';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { LOGIN } from 'navigation/CONSTANTS';
import CardMedia from '@mui/material/CardMedia';
import CardAbout from './CardAbout.js';
import CardExperience from './CardExperience.js';
import { useEffect, useState } from 'react';
import Axios from 'axios';

// import BasicModal from './BasicModal';


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

const theme = createTheme();

export default function ProfileClient() {

    // let history = useHistory();
    var [nameCLiente, setNameCLiente] = useState();
    const [aboutCLiente, setAboutCLiente] = useState();
    var [countryId, setCountryId] = useState('');
    var [cityId, setCityId] = useState('');
    const idUsuario = localStorage.getItem("userId");

    useEffect(() => {
        guardarPerfilCliente();
        cargarDatosClienteCard();
    }, [])

    const guardarPerfilCliente = () => {
        Axios.get("https://localhost:5004/api/profiles/profiles-client/" + idUsuario + "/user")
            .then((response) => {
                setNameCLiente(response.data.name);
                setAboutCLiente(response.data.about);
            }).catch(error => {
                if (error.response.status === 400) {
                    console.log(error.response);
                    alert(error.response.data)
                    alert(error.response)
                }
            });
    }

    const cargarDatosClienteCard = (idUsuario) => {
        Axios.put("https://localhost:5004/api/profiles/profiles-client/update/profiles-client", idUsuario)
            .then((response) => {
                console.log("DATOS A CARGAR AL CARD DEL PERFIL DEL CLIENTE", response.data);
                setCountryId(response.data.countryId);
                setCityId(response.data.cityId);
            }).catch(error => {
                if (error.response.status === 400) {
                    console.log(error.response);
                    alert(error.response.data)
                    alert(error.response)
                }
            });
    }

    // if (nameCLiente === null) {
    //     nameCLiente = "Sin asignar"
    // }
    // if (countryId === null) {
    //     countryId = 0;
    // }
    // if (cityId === null) {
    //     cityId = 0;
    // }
    const cardProfileUser = [
        {
            nombre: nameCLiente,
            pais: countryId,
            ciudad: cityId,
            image: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
            imageLabel: 'ProfilePhoto',
        },
    ];


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar position="">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Perfil de usuario
                        </Typography>
                        <Button variant="contained" href={LOGIN}>CERRAR SESION</Button>
                    </Toolbar>
                </AppBar>
                <Container sx={{ py: 5 }}>
                    <Grid container spacing={4} >
                        {cardProfileUser.map((post) => (
                            <CardProfileUser key={post.nombre} post={post} />
                        ))}
                    </Grid>
                </Container>
                <Container sx={{ py: 5 }}>
                    <Main title="Acerca de" />
                    <CardAbout about={aboutCLiente}></CardAbout>
                    <Main title="Experiencia laboral" />
                    <CardExperience></CardExperience>
                </Container>
            </Container>
            {/* Starts footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6, paddingTop: 20 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    TrabajoYa!
                </Typography>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image="https://i.ibb.co/F5NwFJL/footer.png"
                    alt="footer"
                />
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
            {/* Ends footer */}
        </ThemeProvider>
    );
}