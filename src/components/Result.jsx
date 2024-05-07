import React from "react";
import { RxCross1 } from "react-icons/rx";

function Result({ res, remBox }) {
  console.log(res);
  let value;

  switch (res) {
    case 1:
      value = "Friendship";
      break;
    case 2:
      value = "Love";
      break;
    case 3:
      value = "Affection";
      break;
    case 4:
      value = "Marriage";
      break;
    case 5:
      value = "Enemies";
      break;
    case 6:
      value = "Siblings";
      break;

    default:
      break;
  }

  return (
    <div className='inp-section res h-[75%] w-[55%] z-50 bg-white flex flex-col p-5 absolute top-[10%] justify-center items-center rounded-md px-9'>
      <RxCross1
        className='absolute right-5 top-4 cursor-pointer'
        onClick={() => remBox(false)}
      />
      <p className='font-mono'>Your Flames Result is</p>
      <p className='font-[Kalam] mt-5 text-[4rem]'>{value}</p>

      <button
        className='bg-orange-500 text-white p-3 rounded-md mt-3'
        onClick={() => location.reload()}
      >
        Play Again
      </button>
    </div>
  );
}

export default Result;
