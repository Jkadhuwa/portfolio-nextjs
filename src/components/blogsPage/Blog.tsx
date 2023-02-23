import Image from "next/image";
import { BlogData } from "@/types";

interface Props {
  blog: BlogData;
}

const Blog = ({ blog }: Props) => {
  return (
    <div className="p-12">
      <div className="cursor-pointer group">
        <a
          href={blog.blogUrl}
          target="_blank"
          className="relative w-full lg:h-80 h-[35rem] inline-block"
          rel="noreferrer"
        >
          <Image
            src={blog.thumbnail.url}
            alt="blog"
            fill
            className="group-hover:scale-105 transition-all duration-500"
          />
        </a>
        <h2 className="text-main-orange border-main-orange mt-7 border border-solid text-xl py-0.5 px-3 tracking-wide inline-block relative left-1/2 -translate-x-1/2">
          {new Date(blog.date).toLocaleDateString()}
        </h2>
        <a
          rel="noreferrer"
          href={blog.blogUrl}
          target="_blank"
          className="text-gray-300 block text-2xl text-center font-medium mt-5 mb-4 tracking-wide group-hover:text-main-orange transition-all duration-300"
        >
          {blog.title}
        </a>
        <p className="text-[1.4rem] text-gray-400 text-center leading-relaxed tracking-wide cursor-text">
          {blog.description}...
        </p>
      </div>
    </div>
  );
};

export default Blog;
