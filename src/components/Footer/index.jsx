import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as TradeMark } from '../../assets/trademark.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <TradeMark />

        Powered by Alyson Eiti.
    </footer>
  )
}
