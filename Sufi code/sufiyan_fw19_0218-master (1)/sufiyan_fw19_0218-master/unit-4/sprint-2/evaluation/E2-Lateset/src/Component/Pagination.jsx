

function Pagination({
  total,
current,
onChange,
}) {
  const prev = (
    <button
    onClick={()=>onChange(-1)}
      data-testid="prev-page"
      disabled={current===1}
    >
      Prev
    </button>
  );
  
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
    onClick={()=>onChange(1)}
      data-testid="next-page"
      disabled={current===total}
    >
      Next
    </button>
  );


  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
