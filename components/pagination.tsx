import { useTranslation } from "react-i18next";

interface PaginationInterface {
  page: number;
  setPage: (page: number) => void;
  maxPage: number;
  perPage: number;
  itemsPerPage: (perPage: number) => void;
}

export default function Pagination({
  page,
  setPage,
  maxPage,
  perPage,
  itemsPerPage,
}: PaginationInterface) {
  const { t } = useTranslation();

  const increasePage = () => {
    if (page === maxPage) return;
    return setPage(page + 1);
  };

  const setItemsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue) && inputValue >= 1) {
      itemsPerPage(inputValue);
    }
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
    <div className="w-full 2xl:w-1/2">
      <div className="flex justify-end mb-10">
        <div className="mt-2.5 mr-4 hidden md:block">
          <div className="form-control w-32 max-w-xs">
            <label className="label">
              <span className="label-text">{t("itemsPerPage")}</span>
            </label>
            <input
              type="number"
              placeholder={perPage.toString()}
              className="input input-bordered w-full max-w-xs text-center"
              onChange={setItemsPerPage}
            />
          </div>
        </div>
        <div className="join flex items-end">
          <div className="btn" onClick={decreasePage}>
            {"<"}
          </div>
          <div className="join-item btn" onClick={() => setPage(1)}>
            1
          </div>
          <input
            type="number"
            placeholder={page.toString()}
            className="input text-center input-bordered w-20 max-w-xs mx-1"
            onChange={handleInputChange}
          />
          <div
            className="join-item btn"
            onClick={() => {
              setPage(maxPage);
            }}
          >
            {maxPage}
          </div>
          <div className="btn" onClick={increasePage}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}
