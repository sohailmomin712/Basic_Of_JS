import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [Lists, setLists] = useState([]);

  const handleAddTask = (text) => {
    const stringOBJ = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    // console.log(stringOBJ);

    setLists([...Lists, stringOBJ]);
  };

  const handleDelete = (id) => {
    setLists(Lists.filter((el) => el.id !== id));
  };

  return (
    <div>
      <AddItem
        maxLength={maxLength === Lists.length}
        handleAddTask={handleAddTask}
      />
      <ListItem Lists={Lists} handleDelete={handleDelete} />
    </div>
  );
}

export default List;
