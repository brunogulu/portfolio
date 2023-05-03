import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';
import customTheme from '../theme/customTheme';

export const InicioView = ({ viewBoxStyle }) => {
   const color = customTheme.palette.custom;

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Typography variant="h1">
            Desarrollador React
            <br />
            Front-End.
         </Typography>

         <Typography variant="h3" sx={{ mt: '3rem' }}>
            ¡Bienvenido/a a mi portfolio! <br />
            Desarrollo con React, diseño UX/UI <br />y gestión de estados con
            Redux.
         </Typography>

         <Button
            aria-label="descargar curriculum"
            disableRipple={false}
            startIcon={
               <FileDownloadOutlined size="large" sx={{ fill: 'white' }} />
            }
            sx={{
               bgcolor: `${color.main}`,
               // bgcolor: `${color.custom}`,
               borderRadius: '4',
               boxShadow: '6px 6px 0 0 #fff',
               height: '70px',
               mt: '3rem',
               ml: '-7px',
               width: '251px',
               '&:hover': {
                  bgcolor: `${color.main}`,
                  boxShadow: '0px 0px 0 0 #fff',
                  transform: 'translate(5px, 5px)',
                  transition: 'all 0.2s ease 0s',
               },
            }}
         >
            <Typography variant="button">Curriculum Vitae</Typography>
         </Button>

         <Box display={'flex'} sx={{ alignItems: 'center', mt: '5rem' }}>
            <Typography variant="h4">Mi Stack</Typography>
            <Typography
               variant="h4"
               sx={{
                  fontWeight: '200',
                  fontSize: '1.2rem',
                  ml: '1.5rem',
                  opacity: '0.5',
               }}
            >
               |
            </Typography>

            <Box display={'flex'} sx={{ alignItems: 'center', ml: '3rem' }}>
               <Stack direction="row" spacing="1.8rem">
                  <svg viewBox="0 0 46 46" fill="none">
                     <path
                        d="M41.3799 0H0L4.62006 41.3799L20.6899 46L36.7598 41.3799L41.3799 0ZM31.8384 14.1616H14.262L14.6637 18.8821H31.3363L30.0306 33.4454L20.6899 36.4585H20.5895L11.3493 33.5459L10.8471 27.6201H15.3668L15.5677 29.9301L20.6899 31.0349L25.7118 29.9301L26.2139 23.7031H10.345L9.13971 9.54148H32.0393L31.8384 14.1616Z"
                        fill="white"
                     />
                  </svg>
                  <svg viewBox="0 0 46 46" fill="none">
                     <path
                        d="M0 0L4.62009 41.3799L20.69 46L36.7598 41.3799L41.3799 0H0ZM31.4367 19.2838L30.5327 33.5458L20.69 36.7598L10.8471 33.5458L10.4454 26.7162H15.6681L15.7686 29.6288L20.5895 31.3362L25.5109 29.6288L25.9126 24.3057H15.1659L14.8646 18.7817H26.4148L26.8166 14.0611H9.54148L9.13974 9.34061H32.0393L31.4367 19.2838Z"
                        fill="white"
                     />
                  </svg>
                  <svg viewBox="0 0 46 46" fill="none">
                     <path
                        d="M0 0V46H46V0H0ZM24.7615 35.9344C24.7615 40.3632 22.0438 42.3764 18.1182 42.3764C14.5952 42.3764 12.4814 40.5645 11.4748 38.4508L15.0985 36.337C15.8031 37.5449 16.407 38.5514 17.9168 38.5514C19.326 38.5514 20.3326 38.0481 20.3326 35.8337V21.2385H24.7615V35.9344ZM34.9278 42.0744C30.9015 42.0744 28.2845 40.1619 27.0766 37.6455L30.5996 35.6324C31.5055 37.1422 32.7134 38.2495 34.8271 38.2495C36.639 38.2495 37.7462 37.3435 37.7462 36.1357C37.7462 34.6258 36.5383 34.1225 34.6258 33.3173L33.5186 32.814C30.3982 31.5055 28.2845 29.7943 28.2845 26.372C28.2845 23.151 30.8009 20.7352 34.6258 20.7352C37.3435 20.7352 39.3567 21.6411 40.7659 24.1576L37.4442 26.2713C36.7396 24.9628 35.9343 24.4595 34.6258 24.4595C33.3173 24.4595 32.512 25.2648 32.512 26.2713C32.512 27.5799 33.3173 28.0831 35.1291 28.8884L36.2363 29.3917C39.9606 31.0022 41.9737 32.512 41.9737 36.1357C42.0744 39.9606 39.0547 42.0744 34.9278 42.0744Z"
                        fill="white"
                     />
                  </svg>
                  <svg viewBox="0 0 46 46" fill="none">
                     <g clipPath="url(#clip0_305_195)">
                        <path
                           d="M23.3499 18.418C20.8231 18.418 18.7679 20.4735 18.7679 23C18.7679 25.5265 20.8234 27.582 23.3499 27.582C25.8764 27.582 27.9319 25.5265 27.9319 23C27.9319 20.4735 25.8764 18.418 23.3499 18.418Z"
                           fill="white"
                        />
                        <path
                           d="M7.81641 28.6338C7.81641 27.0485 6.52666 25.7588 4.94141 25.7588C3.35616 25.7588 2.06641 27.0485 2.06641 28.6338C2.06641 30.219 3.35616 31.5088 4.94141 31.5088C6.52666 31.5088 7.81641 30.219 7.81641 28.6338Z"
                           fill="white"
                        />
                        <path
                           d="M39.4411 23C39.899 22.495 40.3293 21.9886 40.7273 21.4825C43.8164 17.5571 44.7187 14.0118 43.2685 11.5C41.8188 8.98824 38.2973 7.99715 33.3531 8.70958C30.2861 9.15143 26.8503 10.2131 23.352 11.7751C21.5081 10.9515 19.6817 10.2678 17.9175 9.74033C18.093 9.20512 18.2797 8.68852 18.478 8.19298C19.5589 5.491 20.9132 3.64394 22.2553 2.97432C22.5234 1.82004 23.1513 0.802277 24.0142 0.0459748C23.7942 0.0157928 23.5724 0 23.3495 0C20.4493 0 17.8305 2.55423 15.9753 7.19206C15.7363 7.79008 15.5128 8.41583 15.3043 9.06509C14.6379 8.92085 13.984 8.80153 13.3467 8.70958C8.4032 7.9975 4.88174 8.98824 3.43161 11.5C1.98147 14.0118 2.88377 17.5571 5.9725 21.4825C7.88905 23.9181 10.5251 26.3635 13.6275 28.6124C13.8366 30.6206 14.1574 32.5434 14.5828 34.3344C14.0314 34.4502 13.4906 34.5467 12.9624 34.6228C10.0857 35.0373 7.81114 34.7888 6.55929 33.9637C6.04725 34.1196 5.50398 34.2045 4.9414 34.2045C4.31109 34.2045 3.7057 34.0975 3.14032 33.9037C3.2242 34.1087 3.32071 34.3077 3.43161 34.5C4.57501 36.4808 7.0057 37.5157 10.4071 37.5157C11.3193 37.5157 12.3016 37.441 13.3471 37.2904C13.9844 37.1985 14.6382 37.0791 15.3047 36.9349C15.5128 37.5842 15.7363 38.2103 15.9757 38.8079C17.8305 43.4458 20.4496 46 23.3495 46C26.2498 46 28.869 43.4458 30.7241 38.8079C31.8749 35.9301 32.6754 32.4245 33.072 28.6131C34.7064 27.4283 36.2112 26.1891 37.5494 24.9253C37.9256 25.3451 38.2794 25.7652 38.6093 26.1842C40.4125 28.4759 41.3344 30.5764 41.239 32.0742C42.0721 32.8568 42.6649 33.8914 42.8941 35.0559C43.0309 34.8794 43.1566 34.6944 43.2685 34.5C44.719 31.9882 43.8164 28.4433 40.7276 24.5175C40.3293 24.0114 39.899 23.505 39.4411 23ZM33.7377 11.3775C37.4073 10.8486 40.0977 11.3982 40.9344 12.8477C41.7714 14.2971 40.9021 16.9019 38.6093 19.8158C38.2794 20.2348 37.9256 20.6553 37.5494 21.0747C35.0022 18.6696 31.8531 16.3523 28.3541 14.3325C27.7624 13.9911 27.1683 13.6629 26.5734 13.3474C29.0918 12.3711 31.525 11.6962 33.7377 11.3775ZM8.09085 19.8158C5.79808 16.9022 4.92912 14.2971 5.76614 12.8477C6.60281 11.3982 9.29286 10.8486 12.9628 11.3775C13.4909 11.4533 14.0318 11.5498 14.5831 11.6656C13.7735 15.0741 13.3411 18.9598 13.3411 23C13.3411 23.683 13.3541 24.3613 13.3786 25.0341C11.274 23.3418 9.4729 21.5723 8.09085 19.8158ZM16.0364 23C16.0364 19.1788 16.4389 15.5223 17.1921 12.3349C20.3293 13.2762 23.6973 14.7561 27.0065 16.6667C30.3159 18.577 33.2815 20.7536 35.6655 23C33.2815 25.2461 30.3159 27.423 27.0065 29.3333C23.6973 31.2439 20.3293 32.7238 17.1921 33.6651C16.4386 30.4777 16.0364 26.8212 16.0364 23ZM28.2215 37.807C26.8443 41.2495 25.0232 43.3047 23.3495 43.3047C21.6762 43.3047 19.8548 41.2495 18.478 37.807C18.2797 37.3115 18.093 36.7949 17.9175 36.2597C21.274 35.2563 24.8551 33.6875 28.3538 31.6675C28.9458 31.326 29.527 30.9754 30.0977 30.6178C29.6842 33.2868 29.0518 35.7311 28.2215 37.807Z"
                           fill="white"
                        />
                        <path
                           d="M37.4291 33.2568C35.8435 33.2568 34.5541 34.5466 34.5541 36.1318C34.5541 37.7171 35.8435 39.0068 37.4291 39.0068C39.0143 39.0068 40.3041 37.7171 40.3041 36.1318C40.3041 34.5466 39.014 33.2568 37.4291 33.2568Z"
                           fill="white"
                        />
                        <path
                           d="M27.6803 7.10962C29.2655 7.10962 30.5553 5.81987 30.5553 4.23462C30.5553 2.64937 29.2655 1.35962 27.6803 1.35962C26.095 1.35962 24.8053 2.64937 24.8053 4.23462C24.8053 5.81987 26.095 7.10962 27.6803 7.10962Z"
                           fill="white"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_305_195">
                           <rect width="46" height="46" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <svg viewBox="0 0 46 35" fill="none">
                     <path
                        d="M39.5196 19.6207C37.9376 19.6207 36.5063 19.9973 35.3763 20.6C34.9243 19.7714 34.5476 19.018 34.4723 18.4153C34.3969 17.7373 34.3216 17.3607 34.397 16.6074C34.4723 15.854 34.9243 14.724 34.9243 14.6487C34.9243 14.5734 34.8489 14.1967 33.8696 14.1967C32.9656 14.1967 32.137 14.3474 32.0616 14.6487C31.9863 14.8747 31.7603 15.4774 31.685 16.0047C31.5343 16.8334 29.8016 19.8467 28.8976 21.4287C28.5963 20.826 28.295 20.2987 28.295 19.8467C28.2197 19.1687 28.1443 18.792 28.2196 18.0387C28.295 17.2853 28.747 16.1554 28.747 16.08C28.747 16.0047 28.6716 15.628 27.6923 15.628C26.7883 15.628 25.9597 15.7787 25.8843 16.08C25.809 16.306 25.6583 16.9087 25.5077 17.436C25.2817 17.9633 23.097 23.0107 22.4943 24.2913C22.193 24.9693 21.967 25.4967 21.741 25.8733C21.741 25.8733 21.741 25.8733 21.741 25.9487C21.5903 26.25 21.515 26.4007 21.515 26.4007C21.3643 26.6267 21.289 26.8527 21.2137 26.8527C21.1383 26.8527 21.063 26.25 21.2137 25.4213C21.515 23.6887 22.3437 20.9767 22.3437 20.9013C22.3437 20.826 22.4943 20.374 21.8163 20.148C21.1383 19.922 20.9123 20.2987 20.837 20.2987C20.7617 20.2987 20.7617 20.4493 20.7617 20.4493C20.7617 20.4493 21.515 17.436 19.4056 17.436C18.0496 17.436 16.2417 18.8674 15.3377 20.2233C14.735 20.5247 13.5297 21.2027 12.249 21.8807C11.7217 22.182 11.2697 22.408 10.7423 22.7093L10.667 22.634C8.10568 19.922 3.35969 17.9633 3.51036 14.272C3.58569 12.916 4.03767 9.37537 12.6257 5.08138C19.707 1.54072 25.2817 2.52005 26.261 4.70471C27.617 7.79337 23.2476 13.4434 15.9403 14.272C13.153 14.5734 11.7217 13.5187 11.345 13.0667C10.9684 12.6147 10.893 12.6147 10.7423 12.69C10.5163 12.8407 10.667 13.2174 10.7423 13.4434C10.9683 14.046 11.8723 15.0254 13.379 15.5527C14.735 16.0047 17.9743 16.2307 21.967 14.724C26.4116 12.9914 29.877 8.24537 28.8223 4.25271C27.7676 0.184716 21.063 -1.17128 14.735 1.08872C10.9684 2.44471 6.82502 4.55404 3.88702 7.26603C0.346364 10.5807 -0.180972 13.368 0.0450271 14.5734C0.873692 18.792 6.67434 21.5793 9.00967 23.6133C8.859 23.6887 8.7837 23.764 8.70836 23.764C7.50303 24.3667 3.05836 26.702 2.00369 29.1127C0.72303 31.9 2.2297 33.934 3.20903 34.16C6.22236 34.9887 9.31103 33.482 10.9684 30.996C12.6257 28.51 12.3997 25.346 11.6463 23.8393C11.6463 23.8393 11.6463 23.8393 11.6463 23.764C11.9477 23.6133 12.249 23.3873 12.5503 23.2367C13.153 22.86 13.7557 22.5587 14.2077 22.2573C13.9063 23.0107 13.6804 23.99 13.605 25.346C13.4544 26.928 14.1323 28.962 14.961 29.7907C15.3377 30.1673 15.7897 30.1673 16.091 30.1673C17.0703 30.1673 17.5223 29.3387 18.0497 28.3593C18.6523 27.154 19.1796 25.798 19.1796 25.798C19.1796 25.798 18.5017 29.5647 20.385 29.5647C21.063 29.5647 21.741 28.6607 22.0423 28.2087C22.0423 28.2087 22.0423 28.2087 22.1177 28.1333C22.193 28.058 22.193 27.9827 22.193 27.9827C22.4943 27.5307 23.097 26.476 24.001 24.668C25.131 22.408 26.261 19.5453 26.261 19.5453C26.261 19.5453 26.3363 20.2233 26.713 21.4287C26.939 22.1067 27.3156 22.86 27.6923 23.6133C27.391 23.99 27.2403 24.216 27.2403 24.216C27.0143 24.5173 26.7883 24.8187 26.5623 25.12C25.6583 26.25 24.5283 27.4553 24.3777 27.832C24.227 28.284 24.227 28.5853 24.6036 28.8113C24.8296 28.962 25.2816 29.0373 25.7336 28.962C26.5623 28.8867 27.165 28.736 27.391 28.5853C27.843 28.4347 28.3703 28.2087 28.8223 27.832C29.7263 27.154 30.2537 26.25 30.1783 24.9693C30.1783 24.2913 29.9523 23.6133 29.651 22.9353C29.7263 22.7847 29.8016 22.7093 29.877 22.5587C31.3083 20.4493 32.363 18.1893 32.363 18.1893C32.363 18.1893 32.4383 18.8673 32.815 20.0727C32.9656 20.6753 33.3423 21.278 33.6436 21.956C32.2876 23.0107 31.459 24.2913 31.1576 25.12C30.6303 26.6267 31.0069 27.38 31.8356 27.5307C32.2123 27.606 32.6643 27.4553 33.041 27.3047C33.493 27.154 34.0956 26.928 34.623 26.476C35.5269 25.798 36.3556 24.894 36.3556 23.6133C36.3556 23.0107 36.2049 22.4833 35.9789 21.956C37.1089 21.504 38.5403 21.2027 40.4236 21.4287C44.4163 21.8807 45.2449 24.3667 45.0943 25.4213C44.9436 26.476 44.1149 27.0787 43.8136 27.2293C43.5123 27.38 43.4369 27.4553 43.4369 27.606C43.4369 27.7567 43.5876 27.7567 43.8136 27.7567C44.1149 27.6813 45.923 26.928 45.9983 24.9693C46.0736 22.2573 43.6629 19.5453 39.5196 19.6207ZM8.633 30.9207C7.27701 32.352 5.46902 32.8793 4.64036 32.4273C3.81169 31.9 4.11302 29.7907 5.77035 28.284C6.74968 27.38 8.03033 26.476 8.85899 25.9487C9.08499 25.798 9.31102 25.6473 9.68769 25.4213C9.76302 25.4213 9.763 25.346 9.763 25.346C9.83834 25.2707 9.91366 25.2707 9.98899 25.1953C10.5917 27.4553 10.0643 29.414 8.633 30.9207ZM18.351 24.3667C17.899 25.4967 16.9197 28.3593 16.317 28.2087C15.7897 28.058 15.4883 25.8733 16.2417 23.764C16.6183 22.7093 17.3717 21.3533 17.8237 20.9013C18.577 20.0727 19.3303 19.8467 19.5563 20.148C19.707 20.5247 18.577 23.6133 18.351 24.3667ZM26.3363 28.1333C26.1103 28.2087 25.9597 28.284 25.8843 28.284C25.809 28.284 25.9596 28.1333 25.9596 28.1333C25.9596 28.1333 26.939 27.0787 27.3156 26.5513C27.5416 26.25 27.843 25.9487 28.069 25.572C28.069 25.6473 28.069 25.6473 28.069 25.6473C28.069 26.928 26.8636 27.832 26.3363 28.1333ZM32.4383 26.7773C32.2876 26.702 32.2877 26.3253 32.815 25.2707C32.9656 24.894 33.4176 24.1407 34.171 23.538C34.2463 23.8393 34.3216 24.0653 34.3216 24.2913C34.3216 25.8733 33.1163 26.476 32.4383 26.7773Z"
                        fill="white"
                     />
                  </svg>
                  <svg viewBox="0 0 46 46" fill="none">
                     <path
                        d="M0 38.4342C0 35.1053 2.1 32.0789 5.5 31.0702C6.1 30.8684 6.8 30.7675 7.5 30.7675H15.1V38.4342C15.1 39.1404 15 39.8465 14.8 40.4518C13.8 43.8816 10.7 46 7.5 46C5.5 46 3.6 45.193 2.1 43.7807C0.799999 42.3684 0 40.4518 0 38.4342ZM7.7 30.7675H15.2V15.8377H7.7C7 15.8377 6.4 15.9386 5.7 16.1404C2.3 17.1491 0.299999 20.1754 0.299999 23.4035C0.299999 26.6316 2.3 29.6579 5.7 30.6667C6.4 30.6667 7 30.7675 7.7 30.7675ZM7.7 14.9298H15.2V0H7.7C7 0 6.4 0.100865 5.7 0.302619C2.3 1.31139 0.299999 4.33772 0.299999 7.56579C0.299999 10.7939 2.3 13.8202 5.7 14.8289C6.4 14.8289 7 14.9298 7.7 14.9298ZM15.2 14.9298H22.6C23.3 14.9298 24.1 14.8289 24.8 14.6272C28.1 13.6184 30.1 10.5921 30.1 7.46491C30.1 4.23684 28.1 1.31139 24.8 0.302619C24.1 0.100865 23.4 0 22.6 0H15.2V14.9298ZM22.6 15.4342C21.1 15.4342 19.6 15.8377 18.4 16.7456C17.2 17.6535 16.2 18.7632 15.6 20.1754C15 21.5877 14.9 23.1009 15.2 24.614C15.5 26.1272 16.2 27.4386 17.3 28.5482C18.4 29.6579 19.7 30.364 21.2 30.6667C22.7 30.9693 24.2 30.7675 25.6 30.2632C27 29.6579 28.2 28.75 29 27.4386C29.8 26.1272 30.3 24.7149 30.3 23.2018C30.3 21.1842 29.5 19.2675 28.1 17.7544C26.5 16.2412 24.6 15.4342 22.6 15.4342Z"
                        fill="white"
                     />
                  </svg>
               </Stack>
            </Box>
         </Box>
      </Box>
   );
};
