import styles from "../styles/Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        Wani_Blog
      </Link>
      <div className={styles.menuBox}>
        <Link href="/docs" className={styles.menuItem}>
          Docs
        </Link>
        <Link href="/TS" className={styles.menuItem}>
          Trouble Shooting
        </Link>
        <Link href="/TIL" className={styles.menuItem}>
          TIL
        </Link>
      </div>
    </div>
  );
};
export default Header;
