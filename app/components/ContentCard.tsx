const ContentCard = () => {
  return (
    <div className="lg:flex justify-between w-full">
      <div className="mb-8 lg:mb-0">
        <h3 className="text-5xl font-medium mb-5 leading-snug bg-gradient-to-tl to-sky-600 from-purple-500 inline-block text-transparent bg-clip-text">
          Open source thrives on collaboration. <br /> Every line of code, every
          bug fix, <br /> every improvement - big or small - contributes to the
          greater good.
        </h3>
        <p className="bg-gradient-to-tl to-sky-600 from-purple-500 inline-block text-transparent bg-clip-text">
          Be part of it by contributing to open source
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:items-end">
        <div className="flex lg:w-10/12 justify-between">
          <div className="w-7/12 mr-10">
            <div className="w-10 mb-2 border border-orange-500"></div>
            <h4 className="font-semibold text-white lg:w-full">
              Explore and Get Familiar
            </h4>
          </div>
          <div>
            <p className="">
              Dive into the project! Start by browsing the codebase on the
              repository. Look for a CONTRIBUTING.md file, which will outline
              the project's specific contribution guidelines and preferred
              workflow. Additionally, familiarize yourself with the issue
              tracker to understand current pain points and potential areas
              where you can contribute.
            </p>
          </div>
        </div>
        <div className="flex lg:w-10/12 justify-between">
          <div className="w-7/12 mr-10">
            <div className="w-10 mb-2 border border-orange-500"></div>
            <h4 className="font-semibold text-white hyphens-auto break-words w-16 lg:w-full">
              Find Your Contribution
            </h4>
          </div>
          <div>
            <p>
              There's a place for everyone in open source! Whether you're a
              seasoned developer or just starting out, the issue tracker is your
              friend. Look for issues labeled "good first issue" or "beginner
              friendly" if you're new to contributing. These issues are perfect
              starting points as they are designed to be approachable for those
              getting their feet wet.
            </p>
          </div>
        </div>
        <div className="flex lg:w-10/12 justify-between">
          <div className="w-7/12 mr-10">
            <div className="w-10 mb-2 border border-orange-500"></div>
            <h4 className="font-semibold text-white lg:w-full">
              Make Your Changes
            </h4>
          </div>
          <div>
            <p>
              Once you've identified a suitable issue, claim it (if the project
              uses a claiming system) and make the necessary changes locally.
              Follow the project's coding style and commit messages for clarity.
              Test your changes thoroughly to ensure they don't introduce any
              regressions.
            </p>
          </div>
        </div>
        <div className="flex lg:w-10/12 justify-between">
          <div className="w-7/12 mr-10">
            <div className="w-10 mb-2 border border-orange-500"></div>
            <h4 className="font-semibold text-white w-16 lg:w-full">
              Submit Your Contribution
            </h4>
          </div>
          <div>
            <p>
              With your changes tested and polished, it's time to share them
              with the world! Following the contribution guidelines, create a
              pull request (PR) on the repository. In your PR description,
              clearly explain the issue you addressed, your approach, and any
              relevant testing details. Be prepared to answer questions and
              collaborate with project maintainers to get your contribution
              merged!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
