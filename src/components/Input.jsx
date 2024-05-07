import React, { useState } from "react";

function Input({
  getGuy,
  getGirl,
  getUncommonGuyLetters,
  getUncommonGirlLetters,
  getTotalUncommon,
}) {
  const [guysName, setGuysName] = useState("");
  const [girlsName, setGirlsName] = useState("");

  const handleName = (event) => {
    setGuysName(event.target.value);
  };

  const handleName2 = (event) => {
    setGirlsName(event.target.value);
  };

  const guyNameArr = [...guysName.trim()];
  const girlNameArr = [...girlsName.trim()];

  let totalUncommonLetters, counter;

  function removeCommonLetters(arr1, arr2) {
    let uncommonLetters = " ";

    for (let i = 0; i < arr1.length; i++) {
      counter = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          counter++;
        }
      }

      if (counter == 0) {
        uncommonLetters += arr1[i];
      }
    }

    return uncommonLetters;
  }

  function fetchData() {
    if (guysName == "" || girlsName === "") {
      alert("Please enter some names!!!");
      return;
    }

    let uncommonGuyLetters = "";
    let uncommonGirlLetters = "";
    uncommonGuyLetters = removeCommonLetters(guyNameArr, girlNameArr);
    uncommonGirlLetters = removeCommonLetters(girlNameArr, guyNameArr);

    console.log(uncommonGuyLetters, uncommonGirlLetters);

    totalUncommonLetters =
      uncommonGuyLetters.length - 1 + uncommonGirlLetters.length - 1;

    console.log(totalUncommonLetters);

    getGuy(guyNameArr);
    getGirl(girlNameArr);
    getUncommonGuyLetters(uncommonGuyLetters);
    getUncommonGirlLetters(uncommonGirlLetters);
    getTotalUncommon(totalUncommonLetters);
  }

  return (
    <form className='inp-section h-[65%] w-[35%] bg-white flex flex-col gap-2 p-5 absolute top-[15%] justify-evenly items-center rounded-md px-9'>
      <label className='text-[1.5rem] font-mono font-bol'>❤️‍🔥 FLAMES ❤️‍🔥</label>
      <div className='mb-[1rem] font-mono text-center'>
        Redefining Relationships, One Letter at a Time!
      </div>

      <input
        type='text'
        placeholder="Enter guy's name"
        name=''
        id='guy'
        className='bg-slate-300 w-full h-[3.5rem] indent-[1rem]'
        onChange={handleName}
      />
      <input
        type='text'
        placeholder="Enter girl's name"
        name=''
        id='girl'
        className='bg-slate-300 h-[3.5rem] w-full indent-[1rem]'
        onChange={handleName2}
      />
      <button
        // type='submit'
        className='bg-green-500 h-[3.5rem] w-[35%] text-white rounded-md text-xl'
        onClick={fetchData}
      >
        Find! 😉
      </button>
    </form>
  );
}

export default Input;
