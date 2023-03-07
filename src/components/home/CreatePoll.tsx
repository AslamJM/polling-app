import Image from "next/image";
import React, { useState } from "react";
import Option from "./Option";

const CreatePoll = () => {
  const [options, setOptions] = useState(["Option #1", "Option #2"]);

  const addNewOptionHandler = () => {
    setOptions((prev) => [...prev, `Option #${prev.length + 1}`]);
  };

  const removeOptionHandler = (index: number) => {
    setOptions((prev) => prev.filter((p, i) => i !== index));
  };

  const showCloseCondition = options.length > 2;

  return (
    <div className="  mt-2 bg-base-100 px-4 py-2">
      <textarea
        className="textarea-primary textarea w-full leading-tight"
        placeholder="What do you want to ask?"
      ></textarea>
      {options.map((op, index) => (
        <div key={index} className="flex items-center">
          <Option placeHolder={op} index={index} />
          {showCloseCondition && (
            <span className="ml-1">
              <button
                className="btn-sm btn-circle btn"
                onClick={() => removeOptionHandler(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          )}
        </div>
      ))}
      <div className="flex items-center">
        <button
          className=" btn-sm btn-circle btn my-1"
          onClick={() => addNewOptionHandler()}
        >
          <Image src="images/plus.svg" alt="plus" width={25} height={25} />
        </button>
        <span className="ml-2 text-gray-500">click to add another option</span>
      </div>
    </div>
  );
};

export default CreatePoll;
