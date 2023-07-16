import { useTranslation } from "react-i18next";

interface TextAreaProps {
  title: string;
  placeholder: string;
  error?: string;
  onChange?: (value: string) => void;
}

export function TextArea(props: TextAreaProps) {
  const { t } = useTranslation();
  const { title, placeholder, error, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">{t(title)}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder={t(placeholder)}
        onChange={handleChange}
      ></textarea>
      <label className="label">
        <span className="label-text-alt">{error && t(error)}</span>
      </label>
    </div>
  );
}
