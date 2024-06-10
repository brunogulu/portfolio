import React from 'react';
import { Box, TextField } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { SendEmailButton } from './SendEmailButton';

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

            <SnackbarProvider>
               <SendEmailButton />
            </SnackbarProvider>
         </Box>
      </Box>
   );
};
