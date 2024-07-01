import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const styles = {
    fadeIn: {
      animation: "fadeIn 1s ease-out forwards",
    },
    keyframes: `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  };

  return (
    <div className="flex relative flex-col items-center justify-center min-h-screen bg-purple-100 font-poppins text-gray-900">
      <style>{styles.keyframes}</style>
      <h1
        className="text-4xl font-bold mb-6 text-purple-600 max-sm:text-2xl text-center"
        style={styles.fadeIn}
      >
        Welcome to the Utility App
      </h1>
      <div className="flex gap-4 max-lg:flex-col text-center max-md:w-4/5 max-lg:max-w-screen">
        <Link
          to="/array"
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition transform hover:scale-105 duration-300"
          style={styles.fadeIn}
        >
          Array Manipulation
        </Link>
        <Link
          to="/form"
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition transform hover:scale-105 duration-300"
          style={styles.fadeIn}
        >
          Form
        </Link>
        <Link
          to="/anagram"
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition transform hover:scale-105 duration-300"
          style={styles.fadeIn}
        >
          String Anagram Detection
        </Link>
      </div>
      <Link
        to="https://github.com/chowjustin/talentgrowth"
        className="text-purple-500 text-4xl absolute bottom-6 hover:text-purple-700 duration-300"
        target="blank"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Home;
