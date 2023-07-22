import { useTranslation } from "react-i18next";

interface RadioGamesOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export default function RadioTeamsOptions({
  selectedOption,
  setSelectedOption,
}: RadioGamesOptionsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex mt-4 w-1/2">
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.teams")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "teams"}
            onChange={() => setSelectedOption("teams")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.division")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "division"}
            onChange={() => setSelectedOption("division")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.conference")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "conference"}
            onChange={() => setSelectedOption("conference")}
          />
        </label>
      </div>
    </div>
  );
}
