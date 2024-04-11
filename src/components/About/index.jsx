import styles from './About.module.css';
import { getImageURL } from '../../utils/function';

const About = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutMeText}>
        <h2 className={styles.aboutTitle}>WHO I AM ?</h2><br/>
        <p className={styles.aboutMeWriter}>
          My name is Diyako. I am a professional and enthusiastic Front-End Developer student in my daily life. I am a quick learner with a
          self-learning attitude. I love to learn and explore new technologies
          and am passionate about problem-solving. I love almost all the stacks
          of web application development and love to make the web more open to
          the world. My core skill is based on JavaScript and I love to do most
          of the things using JavaScript. I am available for any kind of job
          opportunity that suits my skills and interests.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={getImageURL("myImage.jpg")} className={styles.myImage} />
      </div>
    </div>
  );
};

export default About;
