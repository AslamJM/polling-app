import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Image src="images/logo.svg" height={300} width={300} alt="loading" />
    </div>
  );
};

export default Loading;
