function Pagination({
  current,
  onChange,
  total
}) {


  const prev = <button  onClick={()=>onChange(current-1)} on data-testid="prev-page">PREV</button>;
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = <button  onClick={()=>onChange(current+1)} on data-testid="next-page">NEXT</button>;
  




  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">10</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
