import video from '../assets/video.mp4';

export const InicioView = () => {
   return (
      <video id="videoBg" autoPlay muted aria-label="www.vecteezy.com video">
         <source src={video} type="video/mp4" />
      </video>
   );
};
