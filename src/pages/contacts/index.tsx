import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';

export default function Contacts() {
  return (
    <>
      <Seo title="Muhammad Garebaldhie - Contacts" />
      <main className={`${ubuntuMono.className}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>find / gare</span>
        </h1>
        Don&apos;t hesitate to contact me, you can find me here
        <ul>
          <li>
            <a
              href="https://steamcommunity.com/id/AlmightyGare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/eragiare"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IloveNooodles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garebaldhie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mgarebaldhie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:mgarebaldhie80@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: mgarebaldhie80@gmail.com
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
