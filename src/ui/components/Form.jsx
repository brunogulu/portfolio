import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import customTheme from '../../theme/customTheme';
import { useSnackbar } from 'notistack';

export const Form = () => {
   const color = customTheme.palette;
   const form = useRef();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const { enqueueSnackbar } = useSnackbar();

   // EmailJS options
   const options = {
      publicKey: 'zhlX4ZADyWN8UJDne',
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
         // Block the suspended emails
         // list: ['foo@emailjs.com', 'bar@emailjs.com'],
         // The variable contains the email address
         watchVariable: 'userEmail',
      },
      limitRate: {
         // Set the limit rate for the application
         id: 'portfolio',
         // Allow 1 request per 10s
         throttle: 10000,
      },
   };

   const onSubmit = handleSubmit(() => {
      emailjs
         .sendForm('service_ck6vc4o', 'template_2vjjmxg', form.current, options)
         .then(
            response => {
               console.log('SUCCESS!', response.status, response.text);
               enqueueSnackbar('Mensaje enviado', {
                  variant: 'success',
                  disableWindowBlurListener: true,
               });
            },
            error => {
               console.error('FAILED...', error);
               enqueueSnackbar('No se envió el mensaje', {
                  variant: 'error',
                  disableWindowBlurListener: true,
               });
            }
         );
   });

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <Box
            ref={form}
            component="form"
            noValidate
            sx={{
               mb: '3rem',
               mt: '3rem',
               width: '100%',
               '& .MuiTextField-root': { mb: 2 },
            }}
            onSubmit={onSubmit}
         >
            <TextField
               required
               id="name"
               label="Nombre"
               name="user_name"
               {...register('name', {
                  required: { value: true, message: 'Ingrese un nombre' },
                  minLength: {
                     value: 2,
                     message: 'Debe contener al menos 2 caracteres',
                  },
                  maxLength: {
                     value: 25,
                     message: 'Debe contener como máximo 25 caracteres',
                  },
               })}
               autoFocus
               error={!!errors.name}
               helperText={errors.name && errors.name.message}
            />

            <TextField
               required
               id="email"
               label="Email"
               name="user_email"
               {...register('email', {
                  required: {
                     value: true,
                     message: 'Ingrese una dirección de correo electrónico',
                  },
                  pattern: {
                     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                     message: 'Ingrese un correo válido',
                  },
               })}
               error={!!errors.email}
               helperText={errors.email && errors.email.message}
            />

            <TextField
               required
               id="message"
               label="Mensaje"
               name="message"
               {...register('message', {
                  required: { value: true, message: 'Ingrese un mensaje' },
                  minLength: {
                     value: 10,
                     message: 'Debe contener al menos 10 caracteres',
                  },
                  maxLength: {
                     value: 255,
                     message: 'Debe contener como máximo 255 caracteres',
                  },
               })}
               multiline
               rows={5}
               error={!!errors.message}
               helperText={errors.message && errors.message.message}
            />

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
            >
               Enviar
            </Button>

            {/* <SnackbarProvider>
               <SendEmailButton />
            </SnackbarProvider> */}
         </Box>
      </Box>
   );
};
