import { BsAwardFill, BsCodeSlash, BsGlobe, BsJournalAlbum } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Fact } from "@components";

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-3">
      <Fact Icon={BsJournalAlbum} desc="5+ DIY Projects" border />
      <Fact Icon={BsAwardFill} desc="3+ Certifications" border />
      <Fact Icon={BsCodeSlash} desc="15,000+ Lines Written" border />
    </ul>
  );
}
