import Link from "next/link";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
