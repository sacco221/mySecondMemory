import React from "react";

export default function Items({ data }) {
  return (
    <div className="item-container">
      <p className="item-title">Inventory</p>
      {data.map((item, index) => {
        const test = item.name;
        return (
          <div className="item-box" key={index}>
            <p className="item-name">{item.name}</p>
            <p className="item-amount">{item.amount}</p>
            <p className="item-pdate">{item.purchace_date}</p>
            <p className="item-mothod">{item.method}</p>
          </div>
        );
      })}
    </div>
  );
}
