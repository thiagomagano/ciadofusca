function calculateDaysBetweenDates(begin, end) {
  const millisecondsPerDay = 86400000;
  const millisBetween = end.getTime() - begin.getTime();
  const days = millisBetween / millisecondsPerDay;

  return Math.floor(days);
}
