import React from 'react'

const ExploreCard = () => {
  return (
    <section className="p-8 bg-gradient-to-r to-sky-950 from-gray-900">
      <div className="lg:flex items-center p-8 lg:px-24 text-white justify-between bg-gradient-to-tl to-purple-600 from-orange-500 rounded-md">
        <div className="font-medium capitalize mb-5 lg:mb-0">
          Go to app & start exploring the endless possibilities and milestones
        </div>
        <button className="btn font-normal border-none w-36 bg-black lg:rounded-full  hover:bg-black hover:opacity-80 text-white">
          Explore App
        </button>
      </div>
    </section>
  );
}

export default ExploreCard
