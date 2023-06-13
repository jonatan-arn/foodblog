import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

interface searchbarProps {
  allList: { id: string; strs: string[] }[];
  onChange: (c: string[]) => void;
}
export default function searchbar({ allList, onChange }: searchbarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [t, i18n] = useTranslation("global");
  const placeholdertext = t("recipes.placeholdertext");
  useEffect(() => {
    let filterlist: string[] = [];
    let search = searchTerm.trim().toLowerCase();
    if (search.length > 0) {
      allList.map((a) => {
        a.strs.map((s) => {
          if (contieneLetras(s, search)) {
            filterlist.push(a.id);
          }
        });
      });
    } else {
      allList.map((a) => filterlist.push(a.id));
    }
    filterlist = [...new Set(filterlist)];
    onChange(filterlist);
  }, [searchTerm]);
  return (
    <>
      <div className="w-full flex justify-center">
        <input
          className=" border-2 border-gray-500 md:w-full h-12 bg-[url('/search.png')] bg-no-repeat pl-10 bg-center w-9/12  "
          style={{ backgroundPositionX: "calc(1%)" }}
          type="text"
          name="text"
          id="text"
          placeholder={placeholdertext}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
    </>
  );
}
function contieneLetras(
  stringOriginal: string,
  stringBusqueda: string
): boolean {
  let total = "";
  for (let i = 0; i < stringBusqueda.length; i++) {
    total = total + stringBusqueda[i];
    if (!stringOriginal.includes(total)) {
      return false;
    }
  }
  return true;
}
