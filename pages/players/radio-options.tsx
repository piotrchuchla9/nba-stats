import { useTranslation } from "react-i18next";

interface RadioPlayersOptionsProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export default function RadioPlayersOptions({
  selectedOption,
  setSelectedOption,
}: RadioPlayersOptionsProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex 2xl:mt-4 min-w-1/2 w-screen">
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.id")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "id"}
            onChange={() => setSelectedOption("id")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.lastName")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "lastName"}
            onChange={() => setSelectedOption("lastName")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.firstName")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "firstName"}
            onChange={() => setSelectedOption("firstName")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.position")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "position"}
            onChange={() => setSelectedOption("position")}
          />
        </label>
      </div>
      <div className="form-control w-1/2 2xl:w-full text-center">
        <label className="label cursor-pointer flex flex-col">
          <div className="label-text mr-2">{t("radio.team")}</div>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 mt-4"
            checked={selectedOption === "team"}
            onChange={() => setSelectedOption("team")}
          />
        </label>
      </div>
    </div>
  );
}
