import Image from "next/image";
import React, { useState } from "react";
import Option from "./Option";
import { useCreateTopic } from "~/store/slices/createTopicSlice";
import Icons from "../Icons";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const CreatePoll = () => {
  const [options, setOptions] = useState(0);
  const [topic, setTopic] = useState("");

  const voptions = useCreateTopic((state) => state.voptions);
  const removeOption = useCreateTopic((state) => state.rmVoptions);
  const addOption = useCreateTopic((state) => state.addVoptions);

  const createTopic = api.topics.create.useMutation();

  const { data: session } = useSession();

  const addNewOptionHandler = () => {
    addOption(options + 1, ``);
    setOptions((pre) => pre + 1);
  };

  const removeOptionHandler = (index: number) => {
    if (voptions.has(index)) {
      removeOption(index);
      setOptions((pre) => pre - 1);
    }
  };

  const showCloseCondition = voptions.size > 2;
  const disableButtonCondition = voptions.size < 2;

  const createPollHandler = () => {
    const input = {
      title: "first req",
      content: topic,
      options: Array.from(voptions, (v) => v[1]),
      creatorId: session!.user.id,
      privacy: "public" as "public" | "private",
    };

    const res = createTopic.mutate(input);
    console.log(res);
  };

  return (
    <div className="mt-2 rounded-md bg-base-100 px-4 py-2 shadow-sm">
      <>
        <textarea
          className="textarea-primary textarea w-full text-lg leading-tight"
          placeholder="What do you want to ask?"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></textarea>
        {Array.from(voptions, (opt) => ({ key: opt[0], val: opt[1] })).map(
          (option) => {
            return (
              <div key={option.key} className="flex items-center">
                <Option placeHolder={`enter an option`} index={option.key} />
                {showCloseCondition && (
                  <span className="ml-1">
                    <button
                      className="btn-sm btn-circle btn"
                      onClick={() => removeOptionHandler(option.key)}
                    >
                      <Icons.Close />
                    </button>
                  </span>
                )}
              </div>
            );
          }
        )}

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className=" btn-sm btn-circle btn my-1"
              onClick={() => addNewOptionHandler()}
            >
              <Image src="images/plus.svg" alt="plus" width={25} height={25} />
            </button>
            <span className="ml-2 text-gray-500">
              click to add another option
            </span>
          </div>
          <div>
            <button
              className="btn-sm btn"
              disabled={disableButtonCondition}
              onClick={createPollHandler}
            >
              Create Poll
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default CreatePoll;
