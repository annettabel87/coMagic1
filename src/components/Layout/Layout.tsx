import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  const setActiveLink = (isActive: boolean) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink className={({ isActive }) => setActiveLink(isActive)} to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => setActiveLink(isActive)}
            to="/form"
          >
            FormPage
          </NavLink>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div>@ 2024</div>
        <div className={styles.github}>
          <Link
            to="https://github.com/annettabel87"
            className={styles.footerLink}
          >
            <img src="/githubIcon.svg" alt="github" className={styles.icon} />
          </Link>
        </div>
        <div>Анна Репешко</div>
      </footer>
    </div>
  );
};

export default Layout;
