import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";

const ArrayManipulation = () => {
  const [inputArray, setInputArray] = useState("");
  const [targetSum, setTargetSum] = useState("");
  const [pairs, setPairs] = useState([]);

  const findPairs = () => {
    const array = inputArray.split(",").map(Number);
    const target = parseInt(targetSum, 10);
    const result = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          result.push([array[i], array[j]]);
        }
      }
    }

    setPairs(result);
  };

  const handleReset = () => {
    setInputArray("");
    setTargetSum("");
    setPairs([]);
  };

  return (
    <div className="bg-purple-100 flex flex-col items-center justify-center min-h-screen max-md:px-4">
      <div className="font-poppins w-1/2 max-md:w-3/4 max-sm:w-full max-md:p-6 p-12 h-full bg-white text-gray-900 rounded-xl">
        <div className="flex justify-between text-purple-500 max-md:text-center max-md:flex-col">
          <h1 className="text-4xl max-xl:text-xl font-bold md:mb-6 text-purple-600 max-sm:text-lg">
            Array Manipulation
          </h1>
          <Link
            to="/"
            className="text-sm max-lg:text-xs max-md:mb-3 hover:text-purple-800 duration-300"
          >
            Back to home
          </Link>
        </div>
        <InputBox
          title="Enter array elements separated by commas"
          placeholder="Example: 1,2,3,4,5"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
        <InputBox
          title="Enter target sum"
          placeholder="Example: 6"
          value={targetSum}
          onChange={(e) => setTargetSum(e.target.value)}
        />
        <div className="flex gap-2 justify-center">
          <button
            className="bg-purple-500 text-white px-6 sm:py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
            onClick={findPairs}
          >
            Find Pairs
          </button>
          <button
            onClick={handleReset}
            className="bg-purple-500 text-white px-6 py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg max-sm:text-sm">
            Pairs that sum to{" "}
            <span className="text-purple-600 font-bold">{targetSum}</span>:
          </h3>
          <ul>
            {pairs.map((pair, index) => (
              <li key={index} className="max-sm:text-xs">
                {pair[0]} + {pair[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArrayManipulation;
