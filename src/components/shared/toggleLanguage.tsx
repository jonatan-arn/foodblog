import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function toggleLanguage() {
  const [language, setLanguage] = useState("es");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <label className="flex items-center md:right-0  md:top-0 md:relative absolute right-20  top-6 w-max cursor-pointer select-none">
      <input
        type="checkbox"
        value={language}
        onChange={() => setLanguage(language == "es" ? "en" : "es")}
        className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-gray-500"
      />
      <span className="absolute font-medium text-xs uppercase right-1 text-white">
        EN
      </span>
      <span className="absolute font-medium text-xs uppercase right-8 text-white">
        ES
      </span>
      <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
    </label>
  );
}
