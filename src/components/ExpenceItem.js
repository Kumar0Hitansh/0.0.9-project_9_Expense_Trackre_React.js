import React from "react";
import "./ExpenceItem.css";

function ExpenceItem(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <>
      <div className="expence-item">
        <div>
          {day} / {month} / {year}{" "}
        </div>
        <div className="expence-item__description">
          <h2>{props.title}</h2>
          <div className="expence-item__price">{props.price} ₹</div>
        </div>
      </div>
    </>
  );
}

export default ExpenceItem;
