import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IExpertise } from "database/expertise";

const ExpertiseCard = ({
  iconPrefix,
  iconName,
  title,
  desc,
  color,
}: IExpertise) => {
  const iconProps = [iconPrefix, iconName] as IconProp;

  return (
    <article className="  bg-white md:w-64 md:h-68 z-55 shadow p-6 space-y-4 font-light">
      <div className="w-6">
        <FontAwesomeIcon
          icon={iconProps}
          size="xs"
          color={color}
          className="cursor-pointer"
        />
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-400">{desc}</div>
    </article>
  );
};

export default ExpertiseCard;
