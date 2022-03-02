export function Filter2({
  sorterHandlerColbeck,
  sorterlowprice,
  sorterfaster,
  sorteroptim,
}) {
  const LOW_PRICE = "lowprice";
  const FASTER_PRICE = "faster";
  const OPTIM_PRICE = "optim";
  return (
    <div className="filter2">
      <div
        className={`filter2__element filter2__low-price ${
          sorterlowprice ? "filter2__element__clicked" : ""
        }`}
        onClick={() => {
          return sorterHandlerColbeck(LOW_PRICE);
        }}
      >
        Самый дешёвый
      </div>
      <div
        className={`filter2__element filter2__faster ${
          sorterfaster ? "filter2__element__clicked" : ""
        }`}
        onClick={() => sorterHandlerColbeck(FASTER_PRICE)}
      >
        Самый быстрый
      </div>
      <div
        className={`filter2__element filter2__optim ${
          sorteroptim ? "filter2__element__clicked" : ""
        }`}
        onClick={() => sorterHandlerColbeck(OPTIM_PRICE)}
      >
        Оптимальный
      </div>
    </div>
  );
}
