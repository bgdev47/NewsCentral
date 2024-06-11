import styles from './Footer.module.scss'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className="container">
        <p className="text-right pr-5">&copy; {getCurrentYear()} NewsCentral</p>
      </div>
      <div>
        <a href="https://github.com/bgeo96" target="_blank" style={{ color: '#f3f3f3', fontSize: '2.5em' }}><FaGithub /></a>&emsp;
        <a href="https://www.linkedin.com/" target="_blank" style={{ color: '#f3f3f3', fontSize: '2.5em' }}><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Footer;