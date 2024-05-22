import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen pt-24 bg-gradient-to-r to-sky-950 from-gray-900">
      <FaExclamationTriangle className="text-yellow-700 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        href={"/"}
        className="text-white btn bg-primary rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
