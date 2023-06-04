import { inter } from "@/fonts/fonts";
import styles from "@/styles/navbar.module.scss";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LuGithub, LuInstagram, LuLinkedin} from "react-icons/lu"

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} ${inter.className} `}>
      <ul className={styles.navlinks}>
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
      </ul>
    </nav>
  );
}
