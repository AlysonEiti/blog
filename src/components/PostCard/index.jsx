import React from 'react';
import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img 
          className={styles.cover} 
          src={`/assets/posts/${post.id}/cover.png`} 
          alt="Cover of post" 
        />

        <h2 className={styles.title}>{post.title}</h2>

        <Button>Read</Button>
      </div>
    </Link>
  )
}
