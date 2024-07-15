import React from "react";

function AddItem({ handleAddTask, maxLength, }) {
  const [text, setText] = React.useState("");

  const handlechange = (e) => {
    //  console.log(e.target.value, e.target);
    setText(e.target.value);
    //  console.log(text);
  };

  function handleAdd() {
    handleAddTask(text);
    setText("");
  }

  // const { getByTestId } = render(<AddList disabled={true} />);     // const addBtn = getByTestId("add-btn");
  // expect(addBtn.disabled).toBe(true);

  return (
    <div>
      <input
        onChange={handlechange}
        value={text}
        data-testid="input"
        placeholder="add something"
      />
      <button disabled={maxLength} onClick={handleAdd} data-testid="add-btn">
        ADD
      </button>
    </div>
  );
}

export default AddItem;
