import React from "react";
import { useRef } from "react";

export default function Additems({ postData }) {
  const nameRef = useRef(null);
  const amountRef = useRef(null);
  const pDateRef = useRef(null);
  const methodRef = useRef(null);

  const pushedButton = () => {
    let result = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      purchase_date: pDateRef.current.value,
      method: methodRef.current.value,
    };
    console.log("result");
    nameRef.current.value = "";
    amountRef.current.value = "";
    return result;
  };

  function uploadedData() {
    let addItem = pushedButton();
    console.log("hey, pushed!");
    postData(addItem);
  }

  return (
    <div className="additem-container">
      <p>Add Items</p>
      <input
        type="text"
        className="additem-name"
        ref={nameRef}
        placeholder="Item name"
      />
      <input
        type="text"
        className="additem-amount"
        ref={amountRef}
        placeholder="amount"
      />
      <input
        type="date"
        className="additem-pdate"
        ref={pDateRef}
        placeholder="Purchase Date"
      />
      <select name="method" value={methodRef}>
        <option value="option1">fridge</option>
        <option value="option2">freezer</option>
        <option value="option3">shelf</option>
      </select>
      <button className="additem-button" onClick={uploadedData}>
        Add!
      </button>
    </div>
  );
}
