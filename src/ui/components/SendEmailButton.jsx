import React from 'react';
import { Button } from '@mui/material';
import customTheme from '../../theme/customTheme';
import { useSnackbar } from 'notistack';

export const SendEmailButton = () => {
   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
   const color = customTheme.palette;
   const messages = {
      success: 'Mensaje enviado',
      error: 'No se envió el mensaje',
   };

   const handleClickVariant = variant => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(messages[variant], { variant });
   };

   return (
      <Button
         type="submit"
         variant="contained"
         sx={{
            color: color.primary.dark,
            bgcolor: color.primary.light,
            height: '2.8rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            textTransform: 'capitalize',
            width: '100%',
            '&:hover': {
               bgcolor: color.primary.light,
               textDecorationLine: 'underline',
            },
         }}
         onClick={handleClickVariant('success')}
      >
         Enviar
      </Button>
   );
};
