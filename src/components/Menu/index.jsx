import React from 'react';
import styles from './Menu.module.scss';
import MenuLink from './MenuLink';

export default function Menu() {
  return (
    <header>
        <nav className={styles.nav}>
            <MenuLink to='/' description='Home' />
            <MenuLink to='/aboutme' description='About me' />
        </nav>
    </header>
  )
}
