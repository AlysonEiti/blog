import React from 'react';
import styles from './Article.module.scss';

export default function Article( {children, coverPhoto, title} ) {
  return (
    <article className={styles.articleContainer}>
        <div className={styles.coverPhoto} style={{backgroundImage: `url(${coverPhoto})`}} ></div>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.articleContentContainer}>
            {children} 
        </div>
    </article>
  )
}
