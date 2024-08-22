import Image from "next/image";

const Loader = () => {
   return (
      <div className="flex-center h-screen w-full">
         <Image
            src="/vercel.svg"
            alt="Loading..."
            width={50}
            height={50}
         />
      </div>
   );
};

export default Loader;
