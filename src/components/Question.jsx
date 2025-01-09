import { useState } from "react";
import chevron from "../assets/icons/chevron.svg";

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      class="w-full border-b-2 py-3 flex flex-col gap-1 mt-2"
      id="question"
      style={{ borderColor: "rgb(50, 50, 50)" }}
    >
      <div
        class="flex justify-between align-middle"
        onClick={() => setToggle(!toggle)}
        style={{
          cursor: "pointer",
        }}
      >
        <h1 class="text-3xl font-extralight">{question}</h1>
        <img
          src={chevron.src}
          alt=""
          style={{
            width: "40px",
            transition: "0.3s ease-in-out all",
            transform: toggle ? "rotate(360deg)" : "rotate(180deg)",
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: toggle ? "500px" : "0",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        <span class="opacity-65">{answer}</span>
      </div>
    </div>
  );
};

export default Question;
