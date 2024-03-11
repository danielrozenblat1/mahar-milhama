import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faTiktok, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
const SocialIcons = () => {
  return (
    <ul className={styles.iconList}>
     <li className={styles.iconContent}>
        <a
          data-social="youtube"
          aria-label="youtube"
          href="https://youtube.com/@S.l.kosherkravi?si=5Y3od6UvSDw8ASlM"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <div className={styles.tooltip}>יוטיוב</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="tiktok"
          aria-label="tiktok"
          href="https://www.tiktok.com/@s.l.kosherkravi?_t=8kaVjzppiZV&_r=1"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faTiktok} />
          </svg>
        </a>
        <div className={styles.tooltip}>טיקטוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="facebook"
          aria-label="facebook"
          href="https://www.facebook.com/profile.php?id=61555785398719&mibextid=kFxxJD"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faFacebook} />
          </svg>
        </a>
        <div className={styles.tooltip}>פייסבוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="instagram"
          aria-label="instagram"
          href="https://www.instagram.com/s.l_kosherkravi?igsh=MTc2aHhiY2Z6OXo1aA=="
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faInstagram} />
          </svg>
        </a>
        <div className={styles.tooltip}>אינסטגרם</div>
      </li>
 
    </ul>
  );
};

export default SocialIcons;