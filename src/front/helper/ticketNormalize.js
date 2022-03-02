export function ticketNormalize(arrTicket) {
  function priceNormalize(price) {
    return price
      .toString()
      .split("")
      .reverse()
      .reduce((sum, char, i) => {
        if (i % 3 === 0) {
          return sum + " " + char;
        }
        return sum + char;
      }, "Р ")
      .split("")
      .reverse()
      .join("");
  }
  function carrierNormalize(carrier) {
    return `//pics.avs.io/99/36/${carrier}.png`;
  }

  function timOutIn(date, time) {
    let dateOut = new Date(date);
    const outHours = dateOut.getHours();
    const outMinutes = dateOut.getMinutes();
    const inHours = new Date(
      dateOut.setHours(dateOut.getHours() + Math.ceil(time / 60))
    ).getHours();
    const inMinutes = new Date(
      dateOut.setHours(dateOut.getMinutes() + time)
    ).getMinutes();
    return (
      outHours +
      " ч :" +
      outMinutes +
      " м -" +
      inHours +
      " ч :" +
      inMinutes +
      " м"
    );
  }

  function durationNormalize(duration) {
    return Math.ceil(duration / 60) + " ч - " + (duration % 60) + " м";
  }

  function stopsLengthNormalize(stopsLength) {
    switch (stopsLength) {
      case 0:
        return "Без пересадок";
      case 1:
        return "1 Пересадка";
      default:
        return `${stopsLength} пересадки`;
    }
  }

  function arrSegmentsNormalize(segments) {
    return segments.map((segment) => {
      return {
        out: `${segment.origin}-${segment.destination}`,
        outTime: timOutIn(segment.date, segment.duration),
        duration: durationNormalize(segment.duration),
        stopsLength: stopsLengthNormalize(segment.stops.length),
        stops: segment.stops.length !== 0 ? segment.stops.join(", ") : "-----",
      };
    });
  }

  return arrTicket.map((ticket) => {
    return {
      price: priceNormalize(ticket.price),
      carrier: carrierNormalize(ticket.carrier),
      segments: arrSegmentsNormalize(ticket.segments),
    };
  });
}
