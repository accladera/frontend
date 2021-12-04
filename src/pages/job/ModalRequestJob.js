import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

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

  const [curriculum, setCurriculum] = useState();

  const solicitarEmpleo = () => {

  }


  return (
    <div>
      <Button onClick={handleOpen}>Solicitar empleo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 5 }}>
            Rellene el formulario para solicitar el empleo
          </Typography>
          <TextField id="nameProfile" label="Titulo" variant="outlined" sx={{ mb: 5 }} />
          <TextField
            placeholder="Carta de presentacion"
            multiline
            rows={5}
            rowsMax={10}
            sx={{ mb: 5 }}
          />
          <FormControl fullWidth sx={{ mb: 5 }}>
            <InputLabel id="demo-simple-select-label">Selecione curriculum</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={curriculum}
              label="Selecione su curriculum"
              onChange={setCurriculum}
            >
              <MenuItem value={1}>Test</MenuItem>
              <MenuItem value={2}>Test2</MenuItem>
              <MenuItem value={3}>Test3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={() => solicitarEmpleo()} >Enviar solicitud de empleo</Button>
        </Box>
      </Modal>
    </div>
  );
}