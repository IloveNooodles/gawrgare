import Cards, { CardProps } from '@/components/cards';
import Seo from '@/components/seo';
import { ubuntuMono } from '@/fonts/fonts';
import styles from '@/styles/projects.module.scss';
import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const renderProjects = (data: any, error: any, isLoading: boolean) => {
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const projectList = data as CardProps[];
  const project = projectList.filter((p) => p.category === 'projects');
  const miniProject = projectList.filter((p) => p.category === 'mini-projects');
  const contributed = projectList.filter((p) => p.category === 'contributed');

  return (
    <>
      <h2 className={styles.vertical}>Projects</h2>
      <div className={styles['project-container']}>
        {project.map((project, index) => {
          return <Cards {...project} key={index} />;
        })}
      </div>
      <h2 className={styles.vertical}>Mini Projects</h2>
      <div className={styles['project-container']}>
        {miniProject.map((project, index) => {
          return <Cards {...project} key={index} />;
        })}
      </div>
      <h2 className={styles.vertical}>Contributed</h2>
      <div className={styles['project-container']}>
        {contributed.map((project, index) => {
          return <Cards {...project} key={index} />;
        })}
      </div>
    </>
  );
};

export default function Projects() {
  const { data, error, isLoading } = useSWR('/api/projects', fetcher);

  return (
    <>
      <Seo title="Muhammad Garebaldhie - Projects" />
      <main className={`${ubuntuMono.className} ${styles.projects}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>cat projects</span>
        </h1>
        <div>{renderProjects(data, error, isLoading)}</div>
      </main>
    </>
  );
}
