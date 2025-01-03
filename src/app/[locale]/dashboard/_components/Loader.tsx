import { Loader as LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="size-full flex items-center justify-center text-sm">
      <LoaderIcon className="size-4 mr-2 animate-spin" /> Loading...
    </div>
  );
};

export default Loader;