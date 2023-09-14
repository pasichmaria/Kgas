export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => ascendingComparator(a, b, orderBy);
}

export function descendingComparator(a, b, orderBy) {
  const itemA = (a[orderBy] || '').toLowerCase(); // Convert to lowercase if defined, or use an empty string
  const itemB = (b[orderBy] || '').toLowerCase(); // Convert to lowercase if defined, or use an empty string

  if (itemB < itemA) {
    return -1;
  }
  if (itemB > itemA) {
    return 1;
  }
  return 0;
}

export function ascendingComparator(a, b, orderBy) {
  const itemA = (typeof a[orderBy] === 'string' ? a[orderBy] : '').toLowerCase();
  const itemB = (typeof b[orderBy] === 'string' ? b[orderBy] : '').toLowerCase();

  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}