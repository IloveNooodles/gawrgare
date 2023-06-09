import Cards, { CardProps } from '@/components/cards';
import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/projects.module.scss';
import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
  const { data, error, isLoading } = useSWR('/api/projects', fetcher);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const projectList = data as CardProps[];

  return (
    <>
      <Seo title="Muhammad Garebaldhie - Projects" />
      <main className={`${ubuntuMono.className} ${styles.projects}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>cat projects</span>
        </h1>
        <div className={styles['project-container']}>
          {projectList.map((project, index) => {
            return <Cards {...project} key={index} />;
          })}
        </div>
      </main>
    </>
  );
}
