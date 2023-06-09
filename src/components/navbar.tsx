import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';
import Logo from '/public/logo.png';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} ${ubuntuMono.className} `}>
      <Link href="/" className={styles.disabled}>
        <Image src={Logo} alt="Gare logo" />
      </Link>
      <ul className={styles.navlinks}>
        <div>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </div>
        <div className={styles.navmenu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </div>
        <div className={styles.rel}>
          <li>
            <a href="https://www.linkedin.com/in/garebaldhie/">
              <LuLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mgarebaldhie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/IloveNooodles">
              <LuGithub />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
