function MyPagination3({ page, setPage }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pagination">
      {page === 1 ? (
        <>
          <span className="page">Page {page}</span>
          <button
            className="pagination-btn next-btn"
            onClick={() => {
              scrollToTop();
              setPage(page + 1);
            }}
          >
            Next <i className="fa-solid fa-angle-right"></i>
          </button>
        </>
      ) : (
        <>
          <button
            className="pagination-btn prev-btn"
            onClick={() => {
              scrollToTop();
              setPage(page - 1);
            }}
          >
            <i className="fa-solid fa-angle-left"></i> Prev
          </button>{" "}
          <span className="page"> Page {page}</span>{" "}
          <button
            className="pagination-btn next-btn"
            onClick={() => {
              scrollToTop();
              setPage(page + 1);
            }}
          >
            Next <i className="fa-solid fa-angle-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MyPagination3;
