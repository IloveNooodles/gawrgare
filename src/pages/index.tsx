import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Gare from '/public/gare.jpg';

export default function Home() {
  return (
    <>
      <Seo />
      <main className={ubuntuMono.className}>
        <h1>
          me@gawrgare:~$ <span className={styles['span-style']}> whoami </span>
        </h1>
        <section className={styles.container}>
          <Image
            src={Gare}
            alt="Gare's photo"
            width={250}
            className={styles.image}
          />
          <div className={styles['text-container']}>
            <h2 className={styles.heading}>Muhammad Garebaldhie</h2>
            <p>
              Hello, I&apos;m Gare, a Software Engineer and Cybersecurity
              enthusiast
            </p>
            <br />
            <p>
              Currently working in{' '}
              <span>
                <a
                  href="https://www.sayurbox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matchmade
                </a>
              </span>{' '}
              as an software engineer intern. Previously was working as an
              intern in{' '}
              <span>
                <a
                  href="https://www.sayurbox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sayurbox
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  href="https://www.garena.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garena
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  href="https://www.makmur.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  makmur.id
                </a>
              </span>
              , and Stealth Startup.
            </p>
            <br />
            <p>
              I also enjoy doing CTF for fun. My favorite is binary and web
              exploitation.
            </p>
            <br />
            <p>
              I love to play games especially pokemon and monster hunter,
              listening to music, and watching movies. By far, my favorite
              movies is Interstellar and Steins;Gate
            </p>
            <br />
            <Link href="/contacts">Let&apos;s Be friend!</Link>
          </div>
        </section>
      </main>
    </>
  );
}
