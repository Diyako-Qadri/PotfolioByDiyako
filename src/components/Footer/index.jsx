import { IoIosCall } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <IoIosCall />
            <p>(+46) 70 256 55 36</p>
          </div>
          <div className={styles.contactInfo}>
            <MdEmail />
            <p>qadri.diyako@gmail.com</p>
          </div>
          <div className={styles.contactInfo}>
            <FaLocationDot />
            <p>Stockholm, Sweden</p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="#">Stay up to date</label>
          <input
            className={styles.input}
            type="email"
            name="#"
            placeholder="yourEmail@email.com"
          />
          <input
            className={styles.submitBtn}
            type="submit"
            value="Submit"
          ></input>
        </div>
      </div>

      <div className={styles.copyRight}>@Copyright 2024 by Diyako</div>
    </footer>
  );
};

export default Footer;
