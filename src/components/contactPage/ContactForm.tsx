import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import contactOps from "@/src/graphQl/contactOps";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface InputProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}
interface ContactMutation {
  createMessage: {
    name: string;
  };
}

const schema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<InputProps>({
    resolver: yupResolver(schema),
  });

  const [sendMessage, { loading }] = useMutation<ContactMutation, InputProps>(contactOps.Mutation.sendMessage, {
    onCompleted({ createMessage }) {
      toast.success(`Thanks ${createMessage.name} for contacting me. Will get back to You as sonn as possible `, {
        duration: 3000,
      });
      reset({ fullName: "", phone: "", email: "", message: "" });
    },
    onError(error) {
      toast.error("Server error. Try again later");
    },
  });
  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    sendMessage({ variables: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card md:w-3/5 bg-base-100 shadow-xl w-full ">
      <div className="card-body">
        <h2 className="card-title customCircle text-2xl text-main-dark">Contact Form</h2>

        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="form-control w-full min-h-full md:max-w-lg py-4">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Type here"
              className={` input input-bordered w-full md:max-w-lg ${errors.fullName ? " border-red-500" : ""}`}
            />
            <p className="px-4 text-red-500">{errors.fullName?.message}</p>
          </div>
          <div className="form-control w-full md:max-w-lg py-4">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Type here"
              className={` input input-bordered w-full md:max-w-lg ${errors.email ? " border-red-500" : ""}`}
            />
            <p className="px-4 text-red-500">{errors.email?.message}</p>
          </div>
          <div className="form-control md:max-w-lg py-2 w-full">
            <label className="label">
              <span className="label-text text-lg">Phone</span>
            </label>
            <input
              {...register("phone")}
              type="text"
              placeholder="Type here"
              className={` input input-bordered w-full md:max-w-lg ${errors.phone ? " border-red-500" : ""}`}
            />
            <p className="px-4 text-red-500">{errors.phone?.message}</p>
          </div>
          <div className=" flex space-x-6 mt-10">
            <div className="form-control">
              <label className="label cursor-pointer  flex flex-col">
                <input
                  type="radio"
                  id="service"
                  className="radio checked:bg-main-orange"
                  {...register("service")}
                  value="mob-dev"
                  checked
                />
                <span className="label-text text-lg">Mobile Development</span>
              </label>
            </div>
            <div className="form-control ">
              <label className="label cursor-pointer flex flex-col">
                <input
                  type="radio"
                  id="service"
                  className="radio checked:bg-main-orange"
                  {...register("service")}
                  value="web-dev"
                  checked
                 
                />
                <span className="label-text text-lg">Web Development</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer  flex flex-col">
                <input
                  type="radio"
                  id="service"
                  className="radio checked:bg-main-orange"
                  {...register("service")}
                  value="other"
                  checked
                />
                <span className="label-text text-lg">Other</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-control py-2">
          <label className="label">
            <span className="label-text text-lg">Message</span>
          </label>
          <textarea
            {...register("message")}
            className={`textarea textarea-bordered h-24 ${errors.message ? " border-red-500" : ""}`}
            placeholder="Message"
          />
          <p className="px-4 text-red-500">{errors.message?.message}</p>
        </div>
        <div className="card-actions justify-center pt-4">
          <button type="submit" className="btn btn-wide bg-[#0E1522]">
            {" "}
            {loading ? "sending..." : "send message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
