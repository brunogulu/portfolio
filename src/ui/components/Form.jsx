import React from 'react';
import { Button, Box, TextField } from '@mui/material';
import customTheme from '../../theme/customTheme';

export const Form = () => {
   const color = customTheme.palette.custom;

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <Box
            component="form"
            noValidate
            sx={{
               mb: '3rem',
               mt: '3rem',
               width: '100%',
               '& .MuiTextField-root': { mb: 2 },
            }}
         >
            <TextField
               required
               id="name"
               name="name"
               label="Nombre"
               autoFocus
            />

            <TextField required id="email" name="email" label="Email" />

            <TextField
               required
               id="subject"
               name="subject"
               label="Asunto"
               multiline
            />

            <TextField
               required
               id="message"
               name="message"
               label="Mensaje"
               multiline
               rows={3}
            />

            <Button
               variant="contained"
               sx={{
                  color: 'white',
                  bgcolor: color.main,
                  height: '2.8rem',
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  textTransform: 'capitalize',
                  width: '100%',
                  '&:hover': {
                     bgcolor: 'white',
                  },
               }}
            >
               Enviar
            </Button>
         </Box>
      </Box>
   );
};
