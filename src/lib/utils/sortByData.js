export default function sortByData(data, key) {
  return [...data.sort((a, b) => {
    const aData = new Date(a[key]);
    const bData = new Date(b[key]);

    if (aData < bData) {
      return -1;
    }

    if (aData > bData) {
      return 1;
    }
  })];
}