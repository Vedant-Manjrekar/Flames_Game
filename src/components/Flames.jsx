import React, { useState } from "react";

import Flames_word from "./Flames_word";
import Name from "./Name";

function Flames({
  girlName,
  guyName,
  uncommonGuy,
  uncommonGirl,
  uncommonLetters,
}) {
  console.log(uncommonGirl);
  console.log(uncommonGuy);
  console.log(uncommonLetters);

  const uncommonGy = [...uncommonGuy];
  const uncommonGl = [...uncommonGirl];

  const flame_result =
    uncommonLetters > 6 ? uncommonLetters % 6 : uncommonLetters;

  console.log(flame_result);

  const flames = ["f", "l", "a", "m", "e", "s"];

  return (
    <div className='flex flex-col h-[60%] justify-between items-center absolute'>
      <Name name={guyName} uncommonName={uncommonGy} isUp={true} />

      <Flames_word result={flame_result} flames={flames} />

      <Name name={girlName} uncommonName={uncommonGl} isUp={false} />
    </div>
  );
}

export default Flames;
