import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Landing = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="w-full text-4xl font-extrabold">PollHub.</h1>
      <div className="flex w-full">
        <p className="w-1/2 text-justify text-xl">
          Welcome to PollHub where you can create and participate in polls! With
          our platform, you can easily create polls on any topic and share them
          with your friends, colleagues, or the public. Whether you are looking
          to get feedback on a new product, make a decision with a group of
          friends, or simply want to see what others think about a particular
          topic, our polling system makes it easy and fun. Join our community of
          poll creators and voters today and start sharing your opinions and
          insights with the world!
        </p>
        <div className="flex w-1/2 items-center justify-center">
          <Image
            src="images/landing.svg"
            alt="landing"
            width={500}
            height={350}
          />
        </div>
      </div>
      <div>
        <button onClick={() => void signIn("google")} className="btn gap-2">
          <Image src="images/google.svg" alt="google" width={20} height={20} />
          sign in with google
        </button>
      </div>
      {/* <AuthShowcase /> */}
    </div>
  );
};

export default Landing;
