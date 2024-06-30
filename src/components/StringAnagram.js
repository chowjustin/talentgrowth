import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";

const StringAnagram = () => {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  const checkAnagram = () => {
    const normalize = (str) =>
      str.replace(/[\W_]/g, "").toLowerCase().split("").sort().join("");
    setIsAnagram(normalize(string1) === normalize(string2));
  };

  const handleReset = () => {
    setString1("");
    setString2("");
    setIsAnagram(null);
  };

  return (
    <div className="bg-purple-100 flex flex-col items-center justify-center min-h-screen max-md:px-4">
      <div className="font-poppins w-1/2 max-md:w-3/4 max-sm:w-full max-md:p-6 p-12 h-full bg-white text-gray-900 rounded-xl">
        <div className="flex justify-between text-purple-500 max-md:text-center max-md:flex-col">
          <h1 className="text-4xl max-xl:text-xl font-bold md:mb-6 text-purple-600 max-sm:text-lg">
            String Anagram Detection
          </h1>
          <Link
            to="/"
            className="text-sm max-lg:text-xs max-md:mb-3 hover:text-purple-800 duration-300"
          >
            Back to home
          </Link>
        </div>
        <InputBox
          title="Enter first string"
          placeholder="Example: listen"
          value={string1}
          onChange={(e) => setString1(e.target.value)}
        />
        <InputBox
          title="Enter second string"
          placeholder="Example: silent"
          value={string2}
          onChange={(e) => setString2(e.target.value)}
        />
        <div className="flex gap-2 justify-center">
          <button
            className="bg-purple-500 text-white px-6 sm:py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
            onClick={checkAnagram}
          >
            Check Anagram
          </button>
          <button
            onClick={handleReset}
            className="bg-purple-500 text-white px-6 py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Reset
          </button>
        </div>
        <div>
          {isAnagram !== null && (
            <h3 className="text-purple-600 text-lg font-semibold mt-6 max-sm:text-sm max-sm:text-center">
              {isAnagram
                ? "The strings are anagrams."
                : "The strings are not anagrams."}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default StringAnagram;
