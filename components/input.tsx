import { useTranslation } from "react-i18next";

interface InputProps {
  title: string;
  placeholder: string;
  error?: string;
  onChange?: (value: string) => void;
}

export function Input(props: InputProps) {
  const { t } = useTranslation();
  const { title, placeholder, error, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-semibold">{t(title)}</span>
      </label>
      <input
        type="text"
        placeholder={t(placeholder)}
        className="input input-bordered w-full"
        onChange={handleChange}
      />
      <label className="label">
        <span className="label-text-alt">{error && t(error)}</span>
      </label>
    </div>
  );
}
