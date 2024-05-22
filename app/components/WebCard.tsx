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
            This web app brings people together through images. Users can create
            a secure account, connect with others via messaging, share and like
            photos, and organize their visuals into personalized albums for a
            more engaging and enriching online experience.
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
            <h3 className="">UI/UX Design</h3>
          </div>
          <p>
            To achieve a balance between speed, customization, and a polished
            look, I designed the web app using a combination of Tailwind CSS
            for pre-built styles, vanilla CSS for unique elements, and DaisyUI
            for pre-made components, resulting in a visually appealing and
            efficient user interface.
          </p>
        </div>
        <div className="mb-3 lg:mb-0 lg:px-5">
          <div className="lg:mb-8 mb-4">
            <div className="w-5 mb-2 border border-orange-500"></div>
            <h3 className="">Frontend</h3>
          </div>
          <p>
            The frontend leverages React for the interactive app, utilizing
            React Router DOM for smooth navigation and Context API for user
            authentication and security management. Next.js powers the website,
            providing a performant and SEO-friendly foundation built with static
            typing benefits from Typescript.
          </p>
        </div>
        <div className="mb-3 lg:mb-0 lg:px-5">
          <div className="lg:mb-8 mb-4">
            <div className="w-5 border-orange-500 mb-2 border"></div>
            <h3 className="">Backend/Api</h3>
          </div>
          <p>
            The backend utilizes Express.js for APIs, MongoDB for data storage,
            JWT for secure authentication, and cookie parsing for session
            management. Real-time messaging is enabled through Socket.io, while
            deployment on Render and Vercel ensures smooth and accessible
            hosting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebCard;
