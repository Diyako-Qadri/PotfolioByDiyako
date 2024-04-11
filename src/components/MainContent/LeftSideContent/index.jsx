import styles from './LeftSideContent.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect';

const LeftSideContent = () => {
  return (
    <div className={styles.leftContainer}>
      <h2 className={styles.textShadows}>
        <Typewriter
          options={{
            strings: ['Hello!', "Welcome!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <h2>I'm <span className={styles.devName}> Diyako,</span>{' '}
      </h2>
      <h2>a dedicated full-stack developer.</h2>
      <h2 className={styles.textWriter}>Thanks for cheking out my website.</h2>
      <div className={styles.linksContainer}>
        <a href="https://github.com/Diyako-Qadri" target="_blank">
          <AiFillGithub className={styles.icons} />
        </a>
        <a
          href="https://www.linkedin.com/in/diyako-qadri-649ab71a0/"
          target="_blank"
        >
          <FaLinkedin className={styles.icons} />
        </a>
        <a href="#">
          <AiFillInstagram className={styles.icons} />
        </a>
        <a href="#">
          <FaXTwitter className={styles.icons} />
        </a>
      </div>
    </div>
  );
};

export default LeftSideContent;
