import { useTranslation } from "react-i18next";

interface RadioGamesOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export default function RadioGamesOptions({
  selectedOption,
  setSelectedOption,
}: RadioGamesOptionsProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex 2xl:mt-4 min-w-1/2 w-screen">
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.games")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "games"}
            onChange={() => setSelectedOption("games")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.highestScore")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "highestScore"}
            onChange={() => setSelectedOption("highestScore")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.lowestScore")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "lowestScore"}
            onChange={() => setSelectedOption("lowestScore")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.biggestDifference")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "biggestDifference"}
            onChange={() => setSelectedOption("biggestDifference")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("date")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "date"}
            onChange={() => setSelectedOption("date")}
          />
        </label>
      </div>
    </div>
  );
}
