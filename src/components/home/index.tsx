import Navbar from "../layout/Navbar";
import CreatePoll from "./CreatePoll";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary-content">
      <Navbar />
      <div className="w-1/2">
        <CreatePoll />
      </div>
    </div>
  );
};

export default Home;
