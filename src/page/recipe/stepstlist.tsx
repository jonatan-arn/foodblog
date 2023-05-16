import Steps from "../../interface/Isteps";

interface stepsbyGroup {
  group: string;
  steps: Steps[];
}
interface stepslistProps {
  list: stepsbyGroup;
}
export default function stepstlist({ list }: stepslistProps) {
  return (
    <>
      <h5 className="underline text-xl md:mt-12 mt-5">{list.group}</h5>
      <ol className="list-decimal pl-16">
        {list.steps.map((i) => (
          <li className="md:text-xl mt-4" key={i.id}>
            {i.name}
          </li>
        ))}
      </ol>
    </>
  );
}
