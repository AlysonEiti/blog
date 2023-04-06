import React from 'react';
import styles from './AboutMe.module.scss';
import Article from '../../components/Article';
import coverPhoto from '../../assets/about_me_cover.png';
import photoAboutMe from '../../assets/about_me_photo.png';

export default function AboutMe() {
  return (
    <Article
      coverPhoto={coverPhoto} 
      title="About me" 
    >
      <h3 className={styles.subtitle}>
        A little about me
      </h3>

      <img 
        src={photoAboutMe} 
        alt="Alyson Eiti profile Photo" 
        className={styles.photoAboutMe}
      />

      <p className={styles.paragraph}>
        Hey there, how's it going? My name is Alyson and I'm a developer. I'm excited to have you here reading my blog!
      </p>
      <p className={styles.paragraph}>
        My journey in programming began in college at FIAP, where my group and I built an autonomous cart for a school project. That's when I discovered my passion for coding and decided to pursue it further. During my studies, I learned various programming languages such as C++, Assembly, Python, Java, and SQL, but I didn't delve too deeply into any one of them.
      </p>
      <p className={styles.paragraph}>
        As I enjoyed the field, I continued my studies on my own and learned many other languages that weren't covered in my courses. Eventually, I landed an internship at Bradesco, where I got to work with technologies that I had studied independently. This experience taught me a lot about project implementation deadlines and coding best practices.
      </p>
      <p className={styles.paragraph}>
        Over time, I expanded my expertise and started working not only as a programmer but also as a data scientist. I've been involved in numerous projects, which have broadened my perspective on how I view processes as a whole.
      </p>
      <p className={styles.paragraph}>
        Today, I consider myself not just a system developer, but a "problem solver." I'm always eager to learn and work with new technologies, and I'm not limited to any specific language or framework. Whatever it takes to implement new projects and solve problems, I'm up for the challenge!
      </p>
      <p className={styles.paragraph}>
        As a developer, I'm passionate about learning and problem-solving. I believe that staying up-to-date with the latest trends and technologies is crucial for success in this field. That's why I'm committed to constantly expanding my knowledge and skills.
      </p>
    </Article>
  )
}
