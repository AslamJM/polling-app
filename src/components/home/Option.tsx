import React, { useState } from "react";
import { useCreateTopic } from "~/store/slices/createTopicSlice";

type Props = {
  placeHolder: string;
  index: number;
};

const Option = ({ placeHolder, index }: Props) => {
  const [text, setText] = useState("");
  const [added, setAdded] = useState(false);

  const add = useCreateTopic((state) => state.addVoptions);
  const options = useCreateTopic((state) => state.voptions);

  const addOption = () => {
    if (!text) return;
    if (options.get(index) === text) return;
    add(index, text);
    setAdded(true);
  };

  return (
    <div className="my-1 w-full">
      {added ? (
        <div className="flex w-full items-center justify-between">
          <p className=" my-1">{text}</p>
          <div className="ml-1">
            <button
              className="btn-sm btn-circle btn"
              onClick={() => setAdded(false)}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
                  stroke="#ffffff"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <input
          type="text"
          placeholder={placeHolder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => addOption()}
          className="input-bordered input-secondary input input-sm my-1 w-full max-w-xs"
        />
      )}
    </div>
  );
};

export default Option;
