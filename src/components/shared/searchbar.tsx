import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
interface searchbarProps {
  allList: { id: string; strs: string[] }[];
  onChange: (c: string[]) => void;
}
export default function searchbar({ allList, onChange }: searchbarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    let filterlist: string[] = [];

    if (searchTerm.length > 0) {
      allList.map((a) => {
        a.strs.map((s) => {
          if (contieneLetras(s, searchTerm.toLowerCase())) {
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
      <div className=" border-2 border-gray-700">
        <input
          className="w-full"
          type="text"
          name="text"
          id="text"
          placeholder="Search Here"
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
