// @client-component
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div>Wani_Blog</div>
      <div className={styles.menuBox}>
        <div className={styles.menuItem}>Docs</div>
        <div className={styles.menuItem}>Trouble Shooting</div>
        <div className={styles.menuItem}>TIL</div>
      </div>
    </div>
  );
};
export default Header;
