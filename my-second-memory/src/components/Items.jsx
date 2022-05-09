import React, { useState } from "react";

export default function Items({ data, deleteItem }) {
  const [checkedItem, setCheckedItem] = useState({}); //checked items -> checkedItemをAppに伝える
  const [checked, setChecked] = useState(false);

  // const updateCheckedArray = () => {

  // }

  const isChecked = () => {
    setChecked(true); // change status to true
    // setCheckedItem  // update the list of all checked items......
  };

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
            <input type="checkbox" className="item-del" onChange={isChecked} />
          </div>
        );
      })}
    </div>
  );
}
