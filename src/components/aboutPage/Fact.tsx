import { IconType } from "react-icons";
import {MyIcon} from "@components";
interface Props {
  Icon: IconType;
  desc: string;
  border?: boolean;
}

export default function Fact({ Icon, desc, border }: Props) {
  return (
    <li
      className={`w-full h-fit flex flex-col items-center py-10 px-12 ${
        border && "relative vCustomLine before:right-0"
      }`}
    >
      <MyIcon Icon={Icon} hoverEffect="cursor-pointer hover:fill-white hover:border-white" />
      <p className="text-2xl text-gray-300 leading-relaxed tracking-wide text-center mt-4">{desc}</p>
    </li>
  );
}
