import React, { useState, useRef } from "react";
import { useCreateTopic } from "~/store/slices/createTopicSlice";
import Icons from "../Icons";

type Props = {
  placeHolder: string;
  index: number;
};

const Option = ({ placeHolder, index }: Props) => {
  const [text, setText] = useState("");
  const [added, setAdded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const add = useCreateTopic((state) => state.addVoptions);
  const options = useCreateTopic((state) => state.voptions);

  const addOption = () => {
    if (!text) return;
    if (options.get(index) === text) {
      setAdded(true);
      return;
    }
    add(index, text);

    setAdded(true);
  };

  return (
    <div className="my-1 w-full">
      {added ? (
        <div className="flex w-full items-center justify-between">
          <p className=" my-1 ml-4">{text}</p>
          <div className="ml-1">
            <button
              className="btn-sm btn-circle btn"
              onClick={() => {
                setAdded(false);
                inputRef.current?.focus();
              }}
            >
              <Icons.Edit />
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
          className="input-bordered input-secondary input input-sm my-1 ml-4 w-full max-w-xs"
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default Option;
