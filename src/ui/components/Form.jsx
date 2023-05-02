import React from 'react';
import { Box, TextField } from '@mui/material';

export const Form = () => {
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
               bgcolor: 'none',
               mt: '3rem',
               width: '100%',
               '& .MuiTextField-root': { mb: 1, variant: 'outlined' },
            }}
         >
            <TextField
               required
               id="name"
               name="name"
               label="Nombre"
               autoComplete="name"
               autoFocus
            />

            <TextField
               required
               id="email"
               name="email"
               label="Email"
               autoComplete="email"
            />

            <TextField required id="subject" name="subject" label="Asunto" />

            <TextField
               required
               id="message"
               name="message"
               label="Mensaje"
               multiline
            />
         </Box>
      </Box>
   );
};
