import styles from '@/styles/cards.module.scss';
import { SiFirefoxbrowser, SiGithub } from 'react-icons/si';

export interface CardProps {
  title: string;
  description: string;
  githubLink: string;
  websiteLink?: string;
  techStackUsed: string;
  category: string;
  date: string;
}

export default function Cards(props: CardProps) {
  const { title, description, githubLink, websiteLink, techStackUsed } = props;

  return (
    <article className={styles.cards}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Techstack: <span>{techStackUsed}</span>
        </p>
        <div className={styles['cards-links']}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <SiGithub />
            <p>Github</p>
          </a>
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <SiFirefoxbrowser />
              <p>Website</p>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
