import React, { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';

// Constantes reutilizables
const EMAILJS_CONFIG = {
   SERVICE_ID: 'service_ck6vc4o',
   TEMPLATE_ID: 'template_2vjjmxg',
   USER_ID: 'zhlX4ZADyWN8UJDne',
};

const VALIDATION_RULES = {
   NAME: {
      required: 'Ingrese un nombre',
      minLength: { value: 2, message: 'Debe contener al menos 2 caracteres' },
      maxLength: {
         value: 25,
         message: 'Debe contener como máximo 25 caracteres',
      },
   },
   EMAIL: {
      required: 'Ingrese un correo',
      pattern: {
         value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
         message: 'Correo inválido',
      },
   },
   MESSAGE: {
      required: 'Ingrese un mensaje',
      minLength: { value: 10, message: 'Debe contener al menos 10 caracteres' },
      maxLength: {
         value: 255,
         message: 'Debe contener como máximo 255 caracteres',
      },
   },
};

const FormField = ({ name, label, rules, multiline = false, rows = 1 }) => {
   const {
      register,
      formState: { errors },
   } = useForm();

   return (
      <TextField
         required
         label={label}
         multiline={multiline}
         rows={rows}
         {...register(name, rules)}
         error={!!errors[name]}
         helperText={errors[name]?.message}
      />
   );
};

export const ContactForm = React.memo(() => {
   const theme = useTheme();
   const form = React.useRef();
   const { enqueueSnackbar } = useSnackbar();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const buttonStyles = useMemo(
      () => ({
         color: theme.palette.primary.dark,
         bgcolor: theme.palette.primary.light,
         height: '2.8rem',
         fontSize: '1.1rem',
         fontWeight: '600',
         textTransform: 'capitalize',
         width: '100%',
         '&:hover': {
            bgcolor: theme.palette.primary.light,
            textDecorationLine: 'underline',
         },
      }),
      [theme]
   );

   const handleEmailSubmit = useCallback(async () => {
      try {
         await emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            form.current,
            EMAILJS_CONFIG.USER_ID
         );
         enqueueSnackbar('Mensaje enviado', { variant: 'success' });
      } catch (error) {
         enqueueSnackbar('No se envió el mensaje', { variant: 'error' });
      }
   }, [enqueueSnackbar]);

   return (
      <Box
         component="form"
         ref={form}
         onSubmit={handleSubmit(handleEmailSubmit)}
         sx={{
            mb: '3rem',
            mt: '3rem',
            width: '100%',
            '& .MuiTextField-root': { mb: 2 },
         }}
      >
         <FormField name="name" label="Nombre" rules={VALIDATION_RULES.NAME} />
         <FormField name="email" label="Email" rules={VALIDATION_RULES.EMAIL} />
         <FormField
            name="message"
            label="Mensaje"
            rules={VALIDATION_RULES.MESSAGE}
            multiline
            rows={5}
         />

         <Button type="submit" variant="contained" sx={buttonStyles}>
            Enviar
         </Button>
      </Box>
   );
});
