import { CircleLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <CircleLoader 
        color="#36d7b7"   // Same color as in the Storybook demo
        size={150}        // Same size as shown in Storybook
        speedMultiplier={1} // Default speed, same as in Storybook
      />
    </div>
  );
}

export default Loader;
