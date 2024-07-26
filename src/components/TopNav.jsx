import PropTypes from "prop-types";
import styles from "./TopNav.module.css";

const TopNav = ({ className = "" }) => {
  return (
    <header className={[styles.topNav, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.wrapper}>
            <a className={styles.a}>አሃዱ በረከት</a>
          </div>
        </div>
      </div>
      <nav className={styles.menusWrapper}>
        <nav className={styles.menus}>
          <a className={styles.home}>Home</a>
          <a className={styles.campaigns}>Campaigns</a>
          <a className={styles.help}>Help</a>
        </nav>
      </nav>
      <button className={styles.btn}>
        <img
          className={styles.mageplaystoreIcon}
          alt=""
          src="/mageplaystore.svg"
        />
        <a className={styles.downloadApp}>Download App</a>
      </button>
    </header>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
