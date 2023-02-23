import { useQuery, NetworkStatus } from "@apollo/client";
import { useEffect, useState } from "react";

import { Blog, Title, Pagination, BlogsSkeleton } from "@components";
import { BlogsQuery } from "@/types";
import blogsOps from "@graphQl/blogsOps";


interface PaginationVariables {
  skip: number;
  first: number;
}

const postsPerPage = 10;

const Blogs = () => {
  const [skip, setSkip] = useState<number>(0);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsQuery | undefined>(undefined);
  const {
    data: blogsData,
    error,
    fetchMore,
    networkStatus,
  } = useQuery<BlogsQuery, PaginationVariables>(blogsOps.Queries.getBlogs, {
    variables: { skip, first: postsPerPage },
    notifyOnNetworkStatusChange: true,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (blogsData === null) return;
    setFilteredBlogs(blogsData);
  }, [blogsData]);

  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="Blogs" />
      <div className="py-8 px-12 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  vCustomLine sm:before:block before:hidden before:left-0 gap-x-4">
        {filteredBlogs === undefined || networkStatus === NetworkStatus.fetchMore
          ? new Array(postsPerPage).fill(0).map((_, idx) => <BlogsSkeleton key={idx}/>)
          : filteredBlogs.blogs.map((b, idx) => <Blog key={idx} blog={b} />)}
      </div>
      <div className="px-12 my-12">
        <Pagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSkip={setSkip}
          setFilteredBlogs={setFilteredBlogs}
          onLoadMore={fetchMore}
        />
      </div>
    </section>
  );
};

export default Blogs;
