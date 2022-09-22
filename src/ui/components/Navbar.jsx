import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
   return (
      <header>
         <div className="logo">
            <Link to="/">
               <div className="logo__img">
                  <svg version="1.1" id="bp_x5F_logo" x="0px" y="0px" viewBox="0 0 300 300">
                     <path
                        id="b"
                        d="M60,100.6l-42.3,42.3c-3.7,3.7-3.7,9.7,0,13.4l97.9,97.9c3.7,3.7,9.7,3.7,13.4,0l42.3-42.3c3.7-3.7,3.7-9.7,0-13.4l-49-49l-49-49C69.7,97,63.7,97,60,100.6z"
                     />
                     <path
                        id="p1"
                        d="M185.3,211.9l42.3,42.3c3.7,3.7,9.7,3.7,13.4,0l42.3-42.3c3.7-3.7,3.7-9.7,0-13.4L241,156.3c-3.7-3.7-9.7-3.7-13.4,0l-42.3,42.3C181.6,202.2,181.6,208.2,185.3,211.9z"
                     />
                     <path
                        id="p2"
                        d="M227.6,45l-42.3,42.3c-3.7,3.7-3.7,9.7,0,13.4l42.3,42.3c3.7,3.7,9.7,3.7,13.4,0l42.3-42.3c3.7-3.7,3.7-9.7,0-13.4	L241,45C237.3,41.3,231.3,41.3,227.6,45z"
                     />
                  </svg>
               </div>
            </Link>
            <span>
               bruno <br />
               pittilini
            </span>
         </div>
         <nav>
            <ul>
               <li>
                  <NavLink to="/inicio" className={({ isActive }) => (isActive ? 'active' : '')}>
                     inicio
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/sobremi" className={({ isActive }) => (isActive ? 'active' : '')}>
                     sobre mi
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/habilidades"
                     className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                     habilidades
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
                     contacto
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};
