import Link from "next/link";

const ExploreCard = () => {
  return (
    <section className="p-8 bg-gradient-to-r to-sky-950 from-gray-900" id="app">
      <div className="lg:flex items-center p-8 lg:px-24 text-white justify-between bg-gradient-to-tl to-purple-600 from-orange-500 rounded-md">
        <div className="font-medium capitalize mb-5 lg:mb-0">
          Go to app & start exploring the endless possibilities and milestones
        </div>
        <Link
          href="https://ultimate-stack-production.onrender.com"
          passHref={true}
          target="_blank"
        >
          <button className="btn font-normal border-none w-36 bg-black lg:rounded-full  hover:bg-black text-white">
            Explore App
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreCard;
