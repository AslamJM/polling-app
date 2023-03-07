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
    <div>
      {added ? (
        <p className="my-1">text</p>
      ) : (
        <input
          type="text"
          placeholder={placeHolder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => addOption}
          className="input-bordered input-secondary input input-sm my-1 w-full max-w-xs"
        />
      )}
    </div>
  );
};

export default Option;
