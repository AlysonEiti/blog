import React from 'react';
import styles from './Button.module.scss';

export default function Button( {children, aux} ) {
  return (
    <button className={`${styles.button} ${styles[aux]}`}>{children}</button>
  )
}
