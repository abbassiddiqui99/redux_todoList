import React, { useState } from "react";

const AddItems = ({ addItemHandler }) => {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addItemHandler(content);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>Add New Item:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="btn waves-effect waves-light" type="submit">
          Submit
          <i class="material-icons right"></i>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
