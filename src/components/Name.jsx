import React from "react";

function Name({ name, uncommonName, isUp }) {
  return (
    <div className='flex justify-center items-center'>
      {name.map((elem, index = 1) => {
        return (
          <p
            className={`text-[3rem] px-[2rem] text-center name ${
              isUp ? "lettrs" : "lettrsDn"
            }`}
            key={index}
          >
            {uncommonName.includes(elem) ? (
              ""
            ) : (
              <label className='slash absolute w-[6rem] rotate-[45deg] text-red-500 font-extralight'>
                <img
                  src='src/assets/slash.svg'
                  className='rotate-[86deg] translate-x-[-1.1rem] translate-y-[3rem] scr'
                  alt=''
                />
              </label>
            )}

            {elem.toUpperCase()}
          </p>
        );
      })}
    </div>
  );
}

export default Name;
