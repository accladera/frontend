import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Axios from 'axios';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [countryId, setCountryId] = useState('');
  const [cityId, setCityId] = useState('');

  const enviarDatosPerfil = (datosPerfil) => {
    Axios.put("https://localhost:5004/api/profiles/profiles-client/update/profiles-client", datosPerfil)
      .then((response) => {
        console.log("Se actualizaron los datos del perfil del cliente:", response);
        console.log("COUNTRY ID", countryId)
        console.log("CITY ID", cityId)
        window.location.replace('');
      }).catch(error => {
        if (error.response.status === 400) {
          console.log(error.response);
          alert(error.response.data)
          alert(error.response)
        }
      });
  }

  const actualizarDatosPerfil = () => {
    const UserId = localStorage.getItem("userId");
    const datosPerfil = {
      UserId,
      name,
      countryId,
      cityId
    };
    enviarDatosPerfil(datosPerfil);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 5 }}>
            Añada informacion a su perfil
          </Typography>
          <TextField id="nameProfile" label="Nombre del perfil" onChange={(e) => setName(e.target.value)} variant="outlined" sx={{ mb: 5 }} />
          <FormControl fullWidth sx={{ mb: 5 }}>
            <InputLabel id="demo-simple-select-label">Pais</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryId}
              label="Selecione su pais"
              onChange={(e) => setCountryId(e.target.value)}
            >
              <MenuItem value={1}>Bolivia</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 5 }}>
            <InputLabel id="demo-simple-select-label">ciudad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cityId}
              label="Selecione su ciudad"
              onChange={(e) => setCityId(e.target.value)}
            >
              <MenuItem value={1}>Santa Cruz</MenuItem>
              <MenuItem value={2}>La Paz</MenuItem>
              <MenuItem value={3}>Cochabamba</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={() => actualizarDatosPerfil()} >Guardar datos del perfil</Button>
        </Box>
      </Modal>
    </div>
  );
}