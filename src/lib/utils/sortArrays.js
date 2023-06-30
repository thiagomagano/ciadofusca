export default function sortArray(array) {
  return [...array.sort(() => Math.random() - 0.5)];
}
