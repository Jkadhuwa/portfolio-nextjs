import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  size?: string;
  hoverEffect?: string;
  extraStyle?: string;
}

export default function MyIcon({ Icon, size, hoverEffect, extraStyle }: Props) {
  return (
    <div
      className={`icon ${size ? size : "w-24 h-24"}  ${hoverEffect ? hoverEffect : ""} ${
        extraStyle ? extraStyle : ""
      } rounded-full border-2 border-main-orange border-solid flex items-center justify-center `}
    >
      <Icon className={`${hoverEffect ? hoverEffect : ""} text-5xl text-main-orange`} />
    </div>
  );
}
