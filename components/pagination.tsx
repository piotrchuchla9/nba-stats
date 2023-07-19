interface PaginationInterface {
  page: number;
  setPage: (page: number) => void;
  maxPage: number;
}

export default function Pagination({
  page,
  setPage,
  maxPage,
}: PaginationInterface) {
  const increasePage = () => {
    if (page === maxPage) return;
    return setPage(page + 1);
  };

  const decreasePage = () => {
    if (page === 1) return;
    return setPage(page - 1);
  };

  return (
    <div className="flex justify-end py-10">
      <div className="join">
        <button className="btn" onClick={decreasePage}>
          {"<"}
        </button>
        <button className="join-item btn" onClick={() => setPage(1)}>
          1
        </button>
        <button className="join-item btn btn-disabled">{page}</button>
        <button
          className="join-item btn"
          onClick={() => {
            setPage(206);
          }}
        >
          206
        </button>
        <button className="btn" onClick={increasePage}>
          {">"}
        </button>
      </div>
    </div>
  );
}
