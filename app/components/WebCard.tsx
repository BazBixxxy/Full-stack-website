import React from "react";

const WebCard = () => {
  return (
    <div className="w-full border p-5 border-indigo-900 rounded pb-8 bg-gradient-to-r to-purple-800 ">
      <div className="lg:flex justify-between p-5">
        <div className="w-7/12">
          <div className="w-10 mb-2 border border-orange-500"></div>
          <h2 className="font-medium capitalize mb-5 lg:mb-0">
            What is project?
          </h2>
        </div>
        <div className="">
          <p className="lg:text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            esse at cum ullam unde itaque a vero dolores. Exercitationem,
            nesciunt? esse at cum ullam unde itaque a vero dolores. esse at cum
            ullam unde itaque a vero dolores. Exercitationem, nesciunt? esse at
            cum ullam unde itaque a vero dolores. Exercitationem, nesciunt?
          </p>
        </div>
      </div>
      <div className="lg:flex justify-between p-5 py-8">
        <div className="w-7/12">
          <h2 className="text-4xl bg-gradient-to-tl to-purple-600 from-orange-500 inline-block text-transparent bg-clip-text mb-3 lg:mb-0">
            The possibilities are beyond your imagination
          </h2>
        </div>
        <div className="justify-end">
          <p className="text-left bg-gradient-to-tl to-purple-600 from-orange-500 inline-block text-transparent bg-clip-text hover:underline cursor-pointer">
            Explore the library
          </p>
        </div>
      </div>
      <div className="lg:flex justify-between p-5 py-8">
        <div className="mb-3 lg:mb-0 lg:px-5">
          <div className="lg:mb-8 mb-4">
            <div className="w-5 mb-2 border border-orange-500"></div>
            <h3 className="">Posts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptatem facere nam veniam fugiat expedita cumque deserunt sed
            suscipit unde cupiditate.
          </p>
        </div>
        <div className="mb-3 lg:mb-0 lg:px-5">
          <div className="lg:mb-8 mb-4">
            <div className="w-5 mb-2 border border-orange-500"></div>
            <h3 className="">Posts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptatem facere nam veniam fugiat expedita cumque deserunt sed
            suscipit unde cupiditate.
          </p>
        </div>
        <div className="mb-3 lg:mb-0 lg:px-5">
          <div className="lg:mb-8 mb-4">
            <div className="w-5 border-orange-500 mb-2 border"></div>
            <h3 className="">Posts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptatem facere nam veniam fugiat expedita cumque deserunt sed
            suscipit unde cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebCard;
