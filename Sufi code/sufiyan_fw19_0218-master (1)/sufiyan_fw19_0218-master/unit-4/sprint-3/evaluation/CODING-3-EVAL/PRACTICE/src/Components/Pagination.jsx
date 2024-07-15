function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ currentPage, totalPage, handlePageChange }) {
  const onclick = (e) => {
    handlePageChange(+(e.target.innerText));
  }


  let pages = createArrayOfSize(totalPage).map((a, i) => {
    return <button data-testid="page-btn" key={Date.now() + i} disabled={(i + 1) == currentPage} onClick={onclick}>{i + 1}</button>;
  });
  return <div>
    {pages}
  </div>;
}

export default Pagination;
