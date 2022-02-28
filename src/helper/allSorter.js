export function allSorter(
  clonTickets,
  sorterlowprice,
  sorterfaster,
  sorteroptim
) {
  if (sorterlowprice) {
    return clonTickets.sort((a, b) => a.price - b.price);
  }
  if (sorterfaster) {
    return clonTickets.sort(
      (a, b) =>
        Number(a.segments[0].duration) +
        Number(a.segments[1].duration) -
        (Number(b.segments[0].duration) + Number(b.segments[1].duration))
    );
  }
  if (sorteroptim) {
    return clonTickets.sort((a, b) => a.price - b.price);
  }
  return clonTickets;
}
