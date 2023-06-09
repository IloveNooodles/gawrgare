import { CardProps } from "@/components/cards";

const dateFormatter = new Intl.DateTimeFormat('id', {});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

export function sortDate(a: CardProps, b: CardProps) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
