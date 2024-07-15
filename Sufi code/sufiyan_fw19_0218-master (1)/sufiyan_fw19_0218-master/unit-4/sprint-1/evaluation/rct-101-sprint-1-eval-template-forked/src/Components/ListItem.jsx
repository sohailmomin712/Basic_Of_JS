function ListItem({ Lists, handleDelete }) {
  const style = { display: "flex", gap: 10, justifyContent: "center" };

  // console.log(Lists);

  return (
    <>
      {Lists.map((el) => (
        <div data-testid="list-container" style={style}>
          <p style={style} data-testid="list-item">
            <b data-testid="list-item-title">{el.title}</b>
            <span data-testid="list-item-status">
              {el.status ? "DONE" : "NOT DONE"}
            </span>
          </p>
          <button onClick={() => handleDelete(el.id)} data-testid="delete-btn">
            DELETE
          </button>
        </div>
      ))}
    </>
  );
}

export default ListItem;
