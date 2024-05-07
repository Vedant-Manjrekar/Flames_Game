import React, { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Result from "./Result";

import circle from "../assets/circle.svg";

gsap.registerPlugin(useGSAP);

function Flames_word({ result, flames }) {
  const [result1, setResult1] = useState(false);

  useGSAP(() => {
    gsap.to(".lettrs", {
      y: 0,
      stagger: 0.5,
      delay: 0.2,
      duration: 0.5,
      opacity: 1,
    });

    gsap.to(".lettrsDn", {
      y: 0,
      stagger: 0.5,
      delay: 0.2,
      duration: 0.5,
      opacity: 1,

      onComplete: () => {
        gsap.to(".slash", {
          x: 12,
          stagger: 0.5,
          delay: 0.5,
          duration: 0.5,
          opacity: 1,

          onComplete: () => {
            gsap.to(".dummy-c", {
              stagger: 0.5,
              delay: 0,
              duration: 0.2,
              opacity: 1,
            });

            gsap.to(".dummy-c", {
              stagger: 0.5,
              delay: 0.5,
              duration: 0.5,
              opacity: 0,
              onComplete: () => {
                gsap.to(".og-c", {
                  stagger: 0.5,
                  delay: 1,
                  duration: 0.5,
                  opacity: 1,
                  onComplete: () => {
                    setResult1(true);
                  },
                });
              },
            });

            gsap.to(".dummy-c1", {
              stagger: -0.5,
              delay: 1.3,
              duration: 0.2,
              opacity: 1,
            });

            gsap.to(".dummy-c1", {
              stagger: -0.5,
              delay: 1.8,
              duration: 0.5,
              opacity: 0,
            });
          },
        });
      },
    });
  });

  return (
    <div className='flex justify-center items-center'>
      {result1 ? <Result res={result} remBox={setResult1} /> : ""}

      {flames.map((elem, index) => {
        return (
          <p
            className={`text-[3rem] bg- px-[1.5rem] flames-w rounded-md m-[2rem] font-semibold w-max`}
            key={index}
          >
            {index + 1 == result ? (
              <span className='og-c font-extralight font-sans absolute text-[7rem] w-max'>
                <img
                  src={circle}
                  className='w-[8rem] cir rotate-[-57deg] translate-x-[-3rem] translate-y-[-1rem]'
                  alt=''
                />
              </span>
            ) : (
              ""
            )}
            <span
              className={`${
                index % 2 == 0 ? "dummy-c" : "dummy-c1"
              } font-extralight font-sans absolute text-[7rem] translate-y-[-1rem] translate-x-[-2.5rem] w-max`}
            >
              <img
                src={circle}
                className='w-[8rem] cir rotate-[-57deg] translate-x-[-1rem] translate-y-[-0rem]'
                alt=''
              />
            </span>
            {index == Math.round(Math.random() * 6) ? elem : elem.toUpperCase()}
          </p>
        );
      })}
    </div>
  );
}

export default Flames_word;
