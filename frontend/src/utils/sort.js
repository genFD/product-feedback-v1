export const sortLeast = (item, arr) => {
  const prop = item.split(' ')[1];
  return arr.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
};

export const sortMost = (item, arr) => {
  const prop = item.split(' ')[1];
  return arr.sort((a, b) => {
    if (a[prop] > b[prop]) {
      return -1;
    }
    if (a[prop] < b[prop]) {
      return 1;
    }
    return 0;
  });
};
