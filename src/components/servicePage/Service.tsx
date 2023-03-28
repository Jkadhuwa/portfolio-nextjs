import { IconType } from "react-icons";
import { MyIcon } from "@components";
import * as Icons from "../../icons";
interface Props {
  name: string;
  border: boolean;
  desc: string;
  icon: IconType;
  last: boolean;
}

export default function Service({ name, border,icon, desc, last }: Props) {
  
  // @ts-ignore
  const {[icon.toString()]:Icon } = Icons;
  
  return (
    <li
      className={`customLine before:bottom-0 relative borderLeft ${
        border ? "before:block" : `sm:before:hidden ${last ? "before:hidden" : "before:block"}`
      }`}
    >
      <div className="py-10 px-12">
        <MyIcon Icon={Icon} />

        <h2 className="capitalize text-[1.6rem] text-gray-300 font-semibold pb-2 pt-4">{name}</h2>
        <p className="text-2xl text-gray-500 leading-[1.8] tracking-wide">{desc}</p>
      </div>
    </li>
  );
}
