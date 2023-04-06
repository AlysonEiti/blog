import React from 'react';
import styles from './MenuLink.module.scss';
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({description, to}) {
  const location = useLocation();
  
  return (
    <Link 
        className={`${styles.nav__link} ${location.pathname === to ? styles.link_highlighted : "" }`} 
        to={to} >
            {description}
    </Link>
  )
}
