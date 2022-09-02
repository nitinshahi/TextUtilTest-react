import React, { useState } from "react";

export default function TextBox(props) {
  const upperCaseFunc = () => {
    let temp = text.toUpperCase();
    setText(text.toUpperCase());
    console.log(temp);
  };
  const onChangeHandle = (event) => {
    setText(event.target.value);
    console.log("onchange function");
  };
  const [text, setText] = useState("Hello There");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={onChangeHandle}
          rows="8"
        ></textarea>
        <button
          type="button"
          className="btn btn-primary"
          onClick={upperCaseFunc}
        >
          Convert into Upper case
        </button>
      </div>
    </div>
  );
}
