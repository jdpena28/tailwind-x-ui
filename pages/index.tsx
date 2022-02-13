import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <section
      style={{ backgroundImage: "url(./Background.png)" }}
      className="h-screen bg-cover bg-no-repeat px-6">
      <NextSeo
        title="Tailwind-X-UI"
        description="An on the go jsx component collections for Tailwind CSS"
      />
      <Navbar />
    </section>
  );
};

export default Home;
