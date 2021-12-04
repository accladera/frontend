import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { LOGIN } from 'navigation/CONSTANTS';
import CardJob from './CardJob';

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

export default function Job() {

    // let history = useHistory();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [salary, setSalary] = useState();
    const idEmpleo = localStorage.getItem("jobId");

    useEffect(() => {
        traerDatosEmpleo();
    }, [])

    const traerDatosEmpleo = () => {
        Axios.get("https://localhost:5005/api/business/job/" + idEmpleo + "/only")
            .then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
                setSalary(response.data.salary);
                console.log("Datos del empleo traidos:");
                console.log("Datos:",response.data);

            }).catch(error => {
                if (error.response.status === 400) {
                    console.log(error.response);
                    alert(error.response.data)
                    alert(error.response)
                }
            });
    }

    const cardJob = [
        {
            nombre: name,
            descripcion: description,
            salario: salary,
            image: 'https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg',
            imageLabel: 'JobImage',
        },
    ];


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar position="">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Detalle del empleo
                        </Typography>
                        <Button variant="contained" href={LOGIN}>CERRAR SESION</Button>
                    </Toolbar>
                </AppBar>
                <Container sx={{ py: 5 }}>
                    <Grid container spacing={4} >
                        {cardJob.map((post) => (
                            <CardJob key={post.nombre} post={post} />
                        ))}
                    </Grid>
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