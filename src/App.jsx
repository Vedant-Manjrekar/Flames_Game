import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Flames from "./components/Flames";

function App() {
  const [guy, setGuy] = useState("");
  const [girl, setGirl] = useState("");
  const [uncommonGuyLetters, setUncommonGuyLetters] = useState("");
  const [uncommonGirlLetters, setUncommonGirlLetters] = useState("");
  const [uncommonTotalLetters, setUncommonTotalLetters] = useState("");

  return (
    <div className='flex justify-center items-center h-100% main'>
      {guy && girl ? (
        <Flames
          girlName={girl}
          guyName={guy}
          uncommonGuy={uncommonGuyLetters}
          uncommonGirl={uncommonGirlLetters}
          uncommonLetters={uncommonTotalLetters}
        />
      ) : (
        <Input
          getGuy={setGuy}
          getGirl={setGirl}
          getUncommonGuyLetters={setUncommonGuyLetters}
          getUncommonGirlLetters={setUncommonGirlLetters}
          getTotalUncommon={setUncommonTotalLetters}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
