import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/contacts.module.scss';
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSpotify,
  BsSteam,
} from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

export default function Contacts() {
  return (
    <>
      <Seo title="Muhammad Garebaldhie - Contacts" />
      <main className={`${ubuntuMono.className} ${styles.container}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>find / gare</span>
        </h1>
        <h2>
          Don&apos;t hesitate to contact me, <span> find </span> me here
        </h2>
        <ul className={styles.list}>
          <li>
            <a
              href="https://steamcommunity.com/id/AlmightyGare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSteam />
              <p>AlmightyG</p>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/eragiare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsSpotify />
              <p>re</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IloveNooodles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
              <p>IloveNooodles</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garebaldhie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
              <p>Muhammad Garebaldhie</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mgarebaldhie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
              <p>mgarebaldhie</p>
            </a>
          </li>
          <li>
            <a
              href="mailto:mgarebaldhie80@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
              <p>mgarebaldhie80@gmail.com</p>
            </a>
          </li>
        </ul>
        {/* <iframe
          className={styles.frame}
          src="https://open.spotify.com/embed/track/09mEdoA6zrmBPgTEN5qXmN?utm_source=generator&theme=0"
          height="200"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
      </main>
    </>
  );
}
