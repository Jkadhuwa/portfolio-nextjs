import { ReactiveVar, useReactiveVar } from "@apollo/client";
import { MouseEvent, KeyboardEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { menus, socialMedia } from "@/data"
import { currentMenu } from "@/apollo-client";
import { SideMenuBtn } from "@components";
import { ProfileData } from "@/types";

interface Props {
  sideMenu: boolean;
  showMenu: ReactiveVar<boolean>;
  profile: ProfileData;
}

const SideMenus = ({ sideMenu, showMenu, profile }: Props) => {
  const menuId = useReactiveVar(currentMenu);
  const closeAside = (e: MouseEvent): void => {
    if ((e.target as Element).classList.contains("aside")) {
      showMenu(false);
    }
  };

  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <section
      onClick={closeAside}
      className={`aside fixed top-0 left-0 w-screen h-screen bg-gray-900/70 z-50 transition-all duration-200 ${
        sideMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <main className="max-h-screen h-screen noScroll overflow-y-scroll w-[32rem] max-w-full bg-[rgb(27,36,48)] flex flex-col relative">
        <button
          onClick={() => showMenu(false)}
          className="transition-all duration-200 hover:text-main-orange absolute left-0 top-0 w-full h-24 bg-[rgb(43,57,74)] text-gray-300 text-5xl flex justify-center items-center"
        >
          <IoMdClose />
        </button>
        <div className="top pb-12 pt-36 flex flex-col items-center">
          <div>
            {/* <Image
              src={profile.ownersPhoto.url}
              alt="userPic"
              objectFit="cover"
              width="125"
              height="125"
              className="rounded-full"
            /> */}
            <h3 className="text-[1.65rem] text-gray-300 tracking-wide font-medium capitalize text-center mt-6 mb-4">
              {profile.name}
            </h3>
          </div> 

           <div className="flex gap-x-5 items-center justify-center">
            {socialMedia.map(({ id, Icon, label, mediaUrl }) => (
              <a rel="noreferrer" href={mediaUrl} className="tooltip tooltip-bottom" data-tip={label} key={id}>
                <Icon className="text-gray-400 text-2xl transition-all duration-300 hover:text-main-orange" />
              </a>
            ))}
          </div>
        </div>

        <div className="bottom bg-gray-800 flex-grow">
          <div className="rounded-lg overflow-hidden">
            {menus.map((m, i) => (
              <SideMenuBtn
                key={m.id}
                menu={m}
                active={menuId === m.id}
                reactiveVar={currentMenu}
                showMenu={showMenu}
                last={i === menus.length - 1}
              />
            ))}
          </div>

          <a
            rel="noreferrer"
            href={profile.cv.url}
            target="_blank"
            className="text-gray-300 uppercase text-xl border-2 border-solid border-gray-300 w-56 h-14 rounded-full font-semibold flex items-center justify-center mx-auto mt-12 hover:text-main-orange hover:border-main-orange transition-all duration-200"
          >
            download cv
          </a>

          <p className="text-center text-gray-500 text-xl m-16 mb-10">{"Musinda Kadhuwa's"} portfolio © {getYear()}.</p>
        </div>
      </main>
    </section>
  );
};

export default SideMenus;
