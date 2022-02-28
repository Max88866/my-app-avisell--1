export function Sidebar({ setFilterColbeck, filter }) {
  return (
    <div className="sidebar">
      <h3>количество пересадок</h3>
      <form>
        <label>
          <input
            type="checkbox"
            className="input visually-hidden"
            onChange={() =>
              setFilterColbeck({
                all: true,
                without: false,
                one: false,
                two: false,
                three: false,
              })
            }
            checked={filter.all}
          />
          <span className="checker"></span>
          Все
        </label>
        <label>
          <input
            type="checkbox"
            className="input visually-hidden"
            onChange={() =>
              setFilterColbeck({
                all: false,
                without: true,
                one: false,
                two: false,
                three: false,
              })
            }
            checked={filter.without}
          />
          <span className="checker"></span>
          Без пересадок
        </label>
        <label>
          <input
            type="checkbox"
            className="input visually-hidden"
            onChange={() =>
              setFilterColbeck({
                all: false,
                without: false,
                one: true,
                two: false,
                three: false,
              })
            }
            checked={filter.one}
          />
          <span className="checker"></span>1 пересадка
        </label>
        <label>
          <input
            type="checkbox"
            className="input visually-hidden"
            onChange={() =>
              setFilterColbeck({
                all: false,
                without: false,
                one: false,
                two: true,
                three: false,
              })
            }
            checked={filter.two}
          />
          <span className="checker"></span>2 пересадка
        </label>
        <label>
          <input
            type="checkbox"
            className="input visually-hidden"
            onChange={() =>
              setFilterColbeck({
                all: false,
                without: false,
                one: false,
                two: false,
                three: true,
              })
            }
            checked={filter.three}
          />
          <span className="checker"></span>3 пересадка
        </label>
      </form>
    </div>
  );
}
