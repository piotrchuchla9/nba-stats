import { useState } from "react";
import { useTranslation } from "react-i18next";

interface TextAreaProps {
  title: string;
  placeholder: string;
  error?: boolean;
  onChange?: (value: string) => void;
  validate?: (value: string) => string | undefined;
}

export function TextArea(props: TextAreaProps) {
  const { t } = useTranslation();
  const { title, placeholder, error, onChange, validate } = props;
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setIsValid(true);

    if (validate) {
      const errorMessage = validate(value);
      if (errorMessage) {
        setIsValid(false);
      }
    }

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
        <span className="label-text-alt">{error && !isValid && (
        <span className="text-red-500">error</span>
      )}</span>
      </label>
    </div>
  );
}
