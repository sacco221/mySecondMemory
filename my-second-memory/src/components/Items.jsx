import React, { useState, useEffect } from "react";

export default function Items({ data, setCheckedItem, checkedItem }) {
  const [checked, setChecked] = useState(false);

  const isChecked = (index) => {
    if (!checkedItem.includes(index)) {
      checkedItem.push(index);
      setCheckedItem(checkedItem);
      setChecked(true);
      console.log("checked on line 12", checked);
      console.log("consumedArr", checkedItem);
    }
  };

  useEffect(() => {
    setChecked(false);
  }, [checked]);

  return (
    <div className="item-container">
      <p className="item-title">Inventory</p>
      {data.map((item, index) => {
        if (!checkedItem.includes(index)) {
          return (
            <div className="item-box" key={index}>
              <p className="item-name">{item.name}</p>
              <p className="item-amount">{item.amount}</p>
              <p className="item-pdate">{item.purchace_date}</p>
              <p className="item-mothod">{item.method}</p>
              <input
                type="checkbox"
                className="item-del"
                onChange={() => isChecked(index)}
              />
            </div>
          );
        } else {
          return (
            <div className="disabled-item-box" key={index}>
              <p className="disabled-item-name">{item.name}</p>
              <p className="disabled-item-amount">{item.amount}</p>
              <p className="disabled-item-pdate">{item.purchace_date}</p>
              <p className="disabled-item-mothod">{item.method}</p>
              <p>consumed</p>
            </div>
          );
        }
      })}
    </div>
  );
}
