import Steps from "../../interface/Isteps";
import { useTranslation } from "react-i18next";

interface stepsbyGroup {
  group: string;
  steps: Steps[];
}
interface stepslistProps {
  list: stepsbyGroup;
  recipename: string;
}
export default function stepstlist({ list, recipename }: stepslistProps) {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h5 className="underline text-xl md:mt-12 mt-5">
        {t("recipes." + recipename + ".steps." + list.group + ".name")}
      </h5>
      <ol className="list-decimal pl-16">
        {list.steps.map((i) => (
          <li className="md:text-xl mt-4" key={i.id}>
            {t("recipes." + recipename + ".steps." + list.group + "." + i.name)}
          </li>
        ))}
      </ol>
    </>
  );
}
