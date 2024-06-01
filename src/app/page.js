import LoginForm from "@/components/Login";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Link
        href="/dashboard"
        className="hover:underline hover:bg-indigo-500 rounded-md hover:text-white"
      >
        LoginForm to Dashboard
      </Link>
    </div>
  );
};

export default Home;
