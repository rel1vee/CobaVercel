import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.h1}>Muh. Zaki Erbai Syas</h1>
        <p className={styles.p}>Servant of Allah | Tech Enthusiast | Lifelong-Learning</p>
      </div>
    </header>
  );
};

export default Header;
