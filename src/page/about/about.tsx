import { useTranslation } from "react-i18next";
import food1 from "/food1.png";

export default function about() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className=" my-80  mx-10 flex flex-row md:flex-col  items-center justify-center ">
        <img
          className=" w-4/6 lg:w-3/12"
          src={food1}
          alt="defaul recipe image"
        />
        <div>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>
      </div>
    </>
  );
}
