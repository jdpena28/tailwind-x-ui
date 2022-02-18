import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Catalog from "@/components/Catalog";

const Button = () => {
  return (
    <div className="flex h-16 w-48 items-center justify-around rounded-md bg-[#3482F6] font-secondary text-xl font-semibold">
      <p>See Docs</p>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.66666 14H23.3333"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1667 5.83334L23.3333 14L15.1667 22.1667"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <section
      style={{ backgroundImage: "url(./Background.png)" }}
      className="relative h-screen bg-cover bg-no-repeat px-6 text-white">
      <NextSeo
        title="Tailwind-X-UI"
        description="An on the go jsx component collections for Tailwind CSS"
      />
      <div className="container mx-auto flex h-full w-full flex-col justify-center px-4">
        <Navbar />
        <div className="z-20 my-auto space-y-8">
          <h1 className="text-8xl font-bold">
            Tailwind React <br />
            <span id="text__gradient" className="bg-clip-text text-transparent">
              Component
            </span>
          </h1>
          <p className="text-xl font-semibold text-[#4A4B4D]">
            On the go jsx tailiwind components
          </p>
          <Button />
        </div>
        <div className="absolute right-0 select-none">
          <Image src="/Skeletal-Loading.png" width={200} height={141} />
        </div>
        <div className="absolute top-14 right-28 select-none">
          <Image src="/Toggle Switch.png" width={200} height={141} />
        </div>
        <Catalog />
      </div>
    </section>
  );
};

export default Home;
