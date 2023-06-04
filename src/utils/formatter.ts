const dateFormatter = new Intl.DateTimeFormat("id", {});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}
