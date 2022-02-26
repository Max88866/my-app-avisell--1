import React from "react";

export function Sidebar() {
  return (
    <div className="dumi">
      <div className="sidebar">
        <h3>количество пересадок</h3>
        <form>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>
            Все
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>
            Без пересадок
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>1 пересадка
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>2 пересадка
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>3 пересадка
          </label>
        </form>
      </div>
    </div>
  );
}
