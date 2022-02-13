import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <section
      style={{ backgroundImage: "url(./Background.png)" }}
      className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
      <NextSeo
        title="Tailwind-X-UI"
        description="An on the go jsx component collections for Tailwind CSS"
      />
    </section>
  );
};

export default Home;
