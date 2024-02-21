const options = {
  year: 'numeric' as const,
  month: 'long' as const,
  day: 'numeric' as const,
};

export const getDate = (date: Date) => {
  return date.toLocaleDateString('ru-RU', options);
};
