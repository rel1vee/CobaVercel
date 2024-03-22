import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.Link} href="/">
            Beranda
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.Link} href="/biodata">
            Biodata
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.Link} href="/prestasi">
            Prestasi
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.Link} href="/galeri">
            Galeri
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.Link} href="/portofolio">
            Portofolio
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.Link} href="/kontak">
            Kontak
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
