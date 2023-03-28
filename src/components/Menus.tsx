import { useState, useEffect } from "react";
import { ReactiveVar, useReactiveVar } from "@apollo/client";
import { currentMenu } from "@/apollo-client";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { MenuButton } from "@components";
import routes from "../routes";
interface Props {
  showSideMenu: ReactiveVar<boolean>;
}

export default function Menus({ showSideMenu }: Props) {
  const menuId = useReactiveVar(currentMenu);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="text-4xl text-gray-300 transition-all duration-300 group-hover:text-main-orange"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoonStars
          className="text-4xl text-gray-300 transition-all duration-300 group-hover:text-main-orange"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="xl:w-[7.2rem] lg:w-[7rem] py-6 h-full mr-4 hidden lg:flex flex-col justify-between dark:text-gray-700">
     
      <div
        onClick={() => showSideMenu(true)}
        className="h-[7.2rem] group rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer"
      >
        <div className="w-11">
          <div className="w-7/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange" />
          <div className="w-9/12 h-1 my-2 bg-gray-300  transition-width duration-300 group-hover:w-full group-hover:bg-main-orange" />
          <div className="w-full h-[0.24rem] bg-gray-300  group-hover:bg-main-orange" />
        </div>
      </div>

      <div className="relative h-[7.2rem] rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer group">
        {renderThemeChanger()}
      </div>

      <div className="overflow-hidden rounded-lg">
        {routes.slice(0, 6).map((m, i) => (
          <MenuButton
            key={m.id}
            menu={m}
            noBorder={i + 1 === routes.length}
            active={menuId === m.id}
            reactiveVar={currentMenu}
          />
        ))}
      </div>
    </header>
  );
}
