import Cards, { CardProps } from '@/components/cards';
import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/projects.module.scss';

const PROJECT_LIST: CardProps[] = [
  {
    title: 'DNAObama',
    description: 'Dna string pattern matching website',
    techStackUsed: 'React, Sequelize, Express, CSS',
    githubLink: 'https://github.com/IloveNooodles/dna-obama',
    websiteLink: 'https://dna-obama.vercel.app/',
  },
  {
    title: 'DNAObama',
    description: 'Dna string pattern matching website',
    techStackUsed: 'React, Sequelize, Express, CSS',
    githubLink: 'https://github.com/IloveNooodles/dna-obama',
    websiteLink: 'https://dna-obama.vercel.app/',
  },
];

export default function Projects() {
  return (
    <>
      <Seo title="Muhammad Garebaldhie - Projects" />
      <main className={`${ubuntuMono.className} ${styles.projects}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>cat projects</span>
        </h1>
        <div className={styles['project-container']}>
          {PROJECT_LIST.map((project, index) => {
            return <Cards {...project} key={index} />;
          })}
        </div>
      </main>
    </>
  );
}
