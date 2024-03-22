import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 Mzes. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/profile.php?id=100084336513986" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/MzesID" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/reliv.ee/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/rel1vee" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/muh-zaki-erbai-syas/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
