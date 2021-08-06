import React from "react";

/**
 * Component for NotFoundPage
 *
 * @returns
 */

const NotFoundPage = () => {
  return (
    <div className="flex text-xl sm:text-2xl font-thin justify-center items-center h-screen">
      <div className=" text-black sm:mr-4">404</div>
      <div className=" leading:10 sm:mr-4">|</div>
      <div className="">Requested page could not be fetched!!</div>
    </div>
  );
};

export default NotFoundPage;
