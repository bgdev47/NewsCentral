import Link from 'next/link';
import styles from './Header.module.scss';
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <span className={styles.logoMain}>NewsCentral </span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><span>Home</span></Link>
          </li>
          <li>
            <Link href='/ausnews'><span>National</span></Link>
          </li>
          <li>
            <Link href='/worldnews'><span>Global</span></Link>
          </li>
          <li>
            <Link href='/about'><span>About</span></Link>
          </li>
          <li>
            <Link href='/privacy'><span>Privacy Policy</span></Link>
          </li>
          <li>
            <Link href='/contact'><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;