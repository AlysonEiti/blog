import React from 'react';
import styles from './Banner.module.scss';
import colorfulCircle from '../../assets/colorful_circle.png';
import myPhoto from '../../assets/my_photo.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.presentation}>
            <h1 className={styles.titulo}>
                Hello world!
            </h1>

            <p className={styles.paragraph}>
            Welcome to my page! My name is Alyson Eiti, software developer at Bradesco. I created this personal space to practice my studies with ReactJS, I hope you like it :)
            </p>
        </div>

        <div className={styles.images}>
            <img 
                className={styles.colorfulCircle} 
                src={colorfulCircle}
                aria-hidden={true}
            />

            <img 
                className={styles.myPhoto}
                src={myPhoto}
                alt="Photo of Alyson"
            />
        </div>
      
    </div>
  )
}
