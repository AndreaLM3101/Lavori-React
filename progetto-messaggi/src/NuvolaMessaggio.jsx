import React from "react";

function NuvolaMessaggio({ text, isRight }) {
  return (
    <div
      className={`max-w-[70%] p-3 my-2 rounded-lg text-white ${
        isRight
          ? "ml-auto bg-green-500 text-right"
          : "mr-auto bg-gray-600 text-left"
      }`}
    >
      {text}
    </div>
  );
}

export default NuvolaMessaggio;
