import { useQuery } from "@apollo/client";
import { ProfileData } from "@/types";
import Typing from "./Typing";
import profileOperations from "@graphQl/profileOps";
import Image from "next/image";

interface Props {
  profiles: [
    {
      name: string;
      avatar: {
        url: string;
      };
    }
  ];
}

export default function Profile() {
  const { loading, error, data } = useQuery<Props>(profileOperations.Queries.getAvatar);
  return (
    <div className=" lg:w-[42rem] rounded-lg relative lg:block sm:mt-40 ">
      <div className="relative z-20 w-60 h-60 mx-auto mt-32  rounded-full profilePic">
        <Image
          src={data?.profiles[0].avatar.url as any}
          alt="userPic"
          width={500}
          height={500}
          priority
          className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
        />
      </div>
      <Typing />
    </div>
  );
}
