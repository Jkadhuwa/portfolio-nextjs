import Title  from "../Title";
import { FiMapPin } from "react-icons/fi";
import { RiPhoneFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="h-full myScroll overflow-y-scroll">
      <Title name="get in touch" />

      <div className="flex flex-col  items-center mt-4 ">
        <h3 className="text-xl font-light text-gray-100">Contact us for a qoute or any Info</h3>
        <div className="flex m-12">
          <div className="flex flex-col text-gray-100 items-center px-8 py-2 border-0 border-solid hover:border hover:border-main-orange hover:text-main-orange">
            <FiMapPin className="mb-4" size={16} />
            <span>Nairobi, Kenya</span>
          </div>

          <div className="flex flex-col text-gray-100 items-center px-8 py-2  border-0 border-solid  hover:border hover:border-main-orange hover:text-main-orange">
            <RiPhoneFill className="mb-4" size={16} />
            <span>+254713723191</span>
          </div>

          <div className="flex flex-col text-gray-100 items-center px-8 py-2 border-0 hover:border border-solid  hover:border-main-orange hover:text-main-orange">
            <IoMailOutline className="mb-4" size={16} />
            <span>justinemsinda@gmail.com</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
