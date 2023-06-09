import Seo from '@/components/seo';
import styles from "@/styles/projects.module.scss"
import { ubuntuMono } from '@/fonts/fonts';

export default function Projects() {
  return (
    <>
      <Seo title="Muhammad Garebaldhie - Projects" />
      <main className={`${ubuntuMono.className}`}>
        <h1>
          {' '}
          me@gawrgare:~$ <span>cat projects</span>
        </h1>
      </main>
    </>
  );
}
