import Hero from "../components/Hero";
import Brand from "../components/Brand";
import AboutSection from "../components/AboutSection";
import ContentSection from "../components/ContentSection";
import ImageSection from "../components/ImageSection";
import ExploreCard from "../components/ExploreCard";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="max-w-screen-2xl">
        <Navbar />
        <Hero />
        <Brand />
        <AboutSection />
        <ContentSection />
        <ImageSection />
        <ExploreCard />
      </div>
    </>
  );
};

export default HomePage;
