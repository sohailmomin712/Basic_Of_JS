

function Pagination({TotalPages,page
  ,handlePage}) {


  const prev = <button disabled={page===1} onClick={()=>handlePage(-1)} data-testid="prev-page">PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button disabled={page===TotalPages} onClick={()=>handlePage(1)} data-testid="next-page">NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{TotalPages}</b>{" "}
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
