import React from "react";
import { api } from "~/utils/api";
import SinglePoll from "./SinglePoll";

const PublicPolls = () => {
  const { data, isLoading } = api.topics.getallPublic.useQuery();

  return (
    <div className="mt-2 w-full rounded-md bg-base-100 px-4 py-2 shadow-sm">
      {isLoading ? (
        <div>Loading......</div>
      ) : (
        <div>
          {data?.polls.map((poll) => (
            <SinglePoll key={poll.id} poll={poll} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicPolls;
