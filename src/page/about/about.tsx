import { useTranslation } from "react-i18next";

export default function about() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className=" my-80  mx-10 flex flex-col items-center justify-center ">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </>
  );
}
