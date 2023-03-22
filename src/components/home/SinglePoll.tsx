import { type FunctionComponent } from "react";
import { type Topic } from "@prisma/client";

interface SinglePollProps {
  poll: Topic;
}

const SinglePoll: FunctionComponent<SinglePollProps> = ({ poll }) => {
  return (
    <div>
      <h4>{poll.title}</h4>
      <p>{poll.content}</p>
    </div>
  );
};

export default SinglePoll;
