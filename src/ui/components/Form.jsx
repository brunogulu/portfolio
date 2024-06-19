import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { SendEmailButton } from './SendEmailButton';
import { SnackbarProvider } from 'notistack';
import emailjs from '@emailjs/browser';

export const Form = () => {
   const form = useRef();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

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
         .sendForm('', 'template_2vjjmxg', form.current, options)
         // .sendForm('service_ck6vc4o', 'template_2vjjmxg', form.current, options)
         .then(
            response => {
               console.log(response);
            },
            error => {
               console.log(error);
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

            <SnackbarProvider>
               <SendEmailButton />
            </SnackbarProvider>
         </Box>
      </Box>
   );
};
