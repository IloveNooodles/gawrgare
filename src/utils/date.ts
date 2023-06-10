import { CardProps } from '@/components/cards';
import { PostMetadata } from '@/pages/blog';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeStyle: 'short',
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

type SortType = CardProps | PostMetadata;

function isCard(input: SortType): input is CardProps {
  return (input as CardProps).githubLink !== undefined;
}

export function sortDate(a: SortType, b: SortType) {
  if (isCard(a) && isCard(b)) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }

  return (
    new Date((b as PostMetadata).published).getTime() -
    new Date((a as PostMetadata).published).getTime()
  );
}
