import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';
import { IoIosCall } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const ContactPage = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_epr51x4', 'template_ltnn4l5', form.current, {
        publicKey: 'Csuym5gx5aHov0nLK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        error => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className={styles.ContactPage}>
      <form className={styles.formContact} ref={form} onSubmit={sendEmail}>
        <h3 className={styles.ContactTitle}>CONTACT</h3>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input
          className={styles.submitBtn}
          type="submit"
          value="Send"
          required
        />
      </form>
     

      <div className={styles.contactPageInfomation}>

      <div className={styles.iconsContainer}>
            <a href="https://github.com/Diyako-Qadri" target='_blank'><AiFillGithub className={styles.contactIcons} /></a>
            <a href="https://www.linkedin.com/in/diyako-qadri-649ab71a0/" target='_blank'><FaLinkedin className={styles.contactIcons}/></a>
            <a href="#"><AiFillInstagram className={styles.contactIcons}/></a>
            <a href="#"><FaXTwitter className={styles.contactIcons}/></a>
       </div>
        <div className={styles.cotactInromationFlex}>
          <div className={styles.contactPageInfo}>
            <IoIosCall />
            <p>(+46) 70 256 55 36</p>
          </div>
          <div className={styles.contactPageInfo}>
            <MdEmail />
            <p>qadri.diyako@gmail.com</p>
          </div>
          <div className={styles.contactPageInfo}>
            <FaLocationDot />
            <p>Stockholm, Sweden</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
