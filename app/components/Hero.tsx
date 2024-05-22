import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="p-8 lg:flex justify-between items-center lg:pt-0 w-full bg-gradient-to-r to-sky-950 from-gray-900"
      id="home"
    >
      <div className="flex-1 p-2 lg:pt-0">
        <h1 className="capitalize bg-gradient-to-tl to-sky-600 from-purple-500 inline-block text-transparent bg-clip-text text-4xl p-1 mb-3">
          Welcome to my ambitious project: building a full-stack app with top
          industry technologies
        </h1>
        <p className="font-normal text-base text-gray-400 mb-3">
          This is my open-source full-stack project! Built with React, Express,
          Node.js, MongoDB, Next.js, and Tailwind CSS, this project showcases
          the full extent of my full-stack development and software engineering
          skills. Here, I put into practice all the knowledge I've acquired,
          exploring and pushing the boundaries of my skillset. Join me on this
          journey of innovation and growth.
        </p>

        {/* contributors here */}
        <div className="mt-5">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar border-none">
              <div className="w-12">
                <Image
                  width={"1080"}
                  height={"1080"}
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="avatar border-none">
              <div className="w-12">
                <Image
                  width={"1080"}
                  height={"1080"}
                  alt=""
                  src="https://cdn.pixabay.com/photo/2024/04/26/09/11/picture-8721442_1280.jpg"
                />
              </div>
            </div>
            <div className="avatar border-none">
              <div className="w-12">
                <Image
                  width={"1080"}
                  height={"1080"}
                  alt=""
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="avatar border-none">
              <div className="w-12">
                <Image
                  width={"1080"}
                  height={"1080"}
                  alt=""
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="avatar border-none">
              <div className="w-12">
                <Image
                  width={"1080"}
                  height={"1080"}
                  alt=""
                  src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"
                />
              </div>
            </div>
            <div className="avatar border-none placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
          <p className="font-normal text-base text-sky-500 mt-2">
            Hoping for atleast 150 contributors in the next 2 years
          </p>
        </div>
        {/* <button className="btn font-normal border-none w-36 bg-sky-900 text-white mt-5">
          Explore App
        </button> */}
      </div>
      <div
        className="flex-1 p-2 h-full lg:pt-0"
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   width: "100%",
        //   height: "100%",
        // }}
      >
        <Image
          width={2250}
          height={1390}
          // src="https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg"
          // src="https://lh3.googleusercontent.com/pw/AP1GczP3iyoZfV2UGR8zTJu7Fmfh__Am6Q5WXswLj21r-iuiRL7fR_sx7eKqsheGfwGDksiXg862NWSfq7L_suKEeVx0h3IuDDa4cGDCS0eiNJKZbIkx5eusJ56JWV7JLp3cf5LbGwogDtLxpOAh1pyrE4-AfHJLvJCq9G0DQqY-Zl2VQiCSmpPnqwmKUXzqudp3LMG-_zX1Z23nV4SUNuT3iJ-EWA3uzToTU4RsdEmWhZ50NME-GXOwzL1GnIbS7KE2Z3tnycTHW12yWhIvrFqY1udUn6zt2oswfRCPHBlsUPPROVZIf9Z8KaGH63M5hjNuFWCnFir3isRuE2llqEQYkc9ztjS_XjyHXUXAkhOm7IIG6Sd1EXVoYlQKhUhEvLqbkYx1N0hOJv2EahRVLC_9acj4eqc3C8Mjbkmds5efdP8NTZesa8qoqC4tKDvzbgDxw4DVAm_ZQMj-ZRuOSb20CZrXstAjj7w6OhoYyb5OsDRJty5rVfulLtJBk9w9cImEyGUpFNBCHbxR7iHG5qvuj50UPAZlI1b_hKra5a-AV3bhWMqghdmvi4xlphtoJ9ckE5rmiiYiTfrh5tb4d2XcCTRDcYgOdizbJXRxM4lFbk2MA_UavcmLtbmZ-06zE5U2Y8gqA8jm9y1KPlp3O5UxQm75xqkQ5c0hYNSin9In66U_SjSElpA967TuD7XIXTEwZqt4AukGae0NRhWVGviRTmhxehmdQTaJF5eWi31Uj7OctSOmPVCELv1c2aQSQYM9YcDqrKHHn_sBnwsHTLhy7_cVO-WUCg_ifYem5ohuJWAg1LFRq2ekkzS8nkckvnrAW-N4hDV9uTy9ootQnwxVDymdYHGfAkkmJ7bFYFzLXAQYrzTBmWVojT3why-0hrXXE3DHMRXfZPSUoeWk2p94dBjb_g=w1440-h1440-s-no?authuser=0"
          src="https://github.com/BazBixxxy/weather-app/blob/main/src/images/bg.png?raw=true"
          alt=""
          className="brightness-75 w-full rounded-md object-cover bg-transparent hidden lg:inline-block"
        />
      </div>
    </section>
  );
};

export default Hero;
