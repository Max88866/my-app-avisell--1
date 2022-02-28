export function filterTickets(clonTicketsSorted, filter) {
  return clonTicketsSorted.filter((el) => {
    if (filter.all) return true;
    if (
      filter.without &&
      el.segments[0].stops.length === 0 &&
      el.segments[1].stops.length === 0
    )
      return true;
    if (
      filter.one &&
      el.segments[0].stops.length === 1 &&
      el.segments[1].stops.length === 1
    )
      return true;
    if (
      filter.two &&
      el.segments[0].stops.length === 2 &&
      el.segments[1].stops.length === 2
    )
      return true;
    if (
      filter.three &&
      el.segments[0].stops.length === 3 &&
      el.segments[1].stops.length === 3
    )
      return true;
  });
}
