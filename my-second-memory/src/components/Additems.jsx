import React from "react";
import { useRef } from "react";

export default function Additems({ postData, setPosted }) {
  const nameRef = useRef(null);
  const amountRef = useRef(null);
  const pDateRef = useRef(null);
  const methodRef = useRef(null);

  const pushedButton = () => {
    let result = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      purchaseDate: pDateRef.current.value,
      method: methodRef.current.value,
    };
    nameRef.current.value = "";
    amountRef.current.value = "";
    return result;
  };

  function uploadedData() {
    let addItem = pushedButton();
    setPosted(true);
    postData(addItem);
  }

  return (
    <div className="additem-container">
      <p className="additem-title">Add Items</p>
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
      <select name="method" ref={methodRef}>
        <option value="fridge">fridge</option>
        <option value="freezer">freezer</option>
        <option value="shelf">shelf</option>
      </select>
      <button className="additem-button" onClick={uploadedData}>
        Add!
      </button>
    </div>
  );
}
