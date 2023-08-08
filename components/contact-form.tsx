import { IconMail } from "@tabler/icons-react";
import { Input } from "./input";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextArea } from "./text-area";

interface FormProps {
  title: string;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormProps>({
    title: "",
    message: "",
  });
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const validateTitle = (value: string) => {
    if (value.length < 3) {
      return t("titleValidation.minLength");
    }
    return undefined;
  };

  const validateMessage = (value: string) => {
    if (value.length < 3) {
      return t("messageValidation.minLength");
    }
    if (value.length > 200) {
      return t("messageValidation.maxLength");
    }
    return undefined;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleErrorMessage = validateTitle(form.title);
    const messageErrorMessage = validateMessage(form.message);

    setIsTitleValid(!titleErrorMessage);
    setIsMessageValid(!messageErrorMessage);

    if (!titleErrorMessage && !messageErrorMessage) {
      const { title, message } = form;
      let mailtoLink = `mailto:piotrchuchla9@gmail.com?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(message)}%0D%0A%0D%0A`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="z-[60] w-full">
      <div className="z-[60] w-full">
        <form className="z-[60] w-full" onSubmit={handleSubmit}>
          <Input
            title={"form.title"}
            placeholder={"form.exampleTitle"}
            onChange={(value: any) => setForm({ ...form, title: value })}
            validate={validateTitle}
            error={!isTitleValid}
            errorMessage={"form.errorTitle"}
          />
          <TextArea
            title={"form.message"}
            placeholder={"form.exampleMessage"}
            onChange={(value) => setForm({ ...form, message: value })}
            validate={validateMessage}
            error={!isMessageValid}
            errorMessage={"form.errorMessage"}
          />
          <button type="submit" className="btn w-full">
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}
