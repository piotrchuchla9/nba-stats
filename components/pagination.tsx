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

  const handleInputChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;

    if (!isNaN(inputValue)) {
      setPage(Number(inputValue));
    }
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
        <input
          type="number"
          placeholder={page.toString()}
          className="input text-center input-bordered w-20 max-w-xs mx-1"
          onChange={handleInputChange}
        />
        <button
          className="join-item btn"
          onClick={() => {
            setPage(maxPage);
          }}
        >
          {maxPage}
        </button>
        <button className="btn" onClick={increasePage}>
          {">"}
        </button>
      </div>
    </div>
  );
}
