import Navbar from "../layout/Navbar";
import CreatePoll from "./CreatePoll";
import PublicPolls from "./PublicPolls";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary-content">
      <Navbar />
      <div className=" w-full max-w-lg md:w-1/2">
        <CreatePoll />
      </div>
      <div className=" w-full max-w-lg md:w-1/2">
        <PublicPolls />
      </div>
    </div>
  );
};

export default Home;
