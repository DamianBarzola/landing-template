import { useState } from "react";
import chevron from "../assets/icons/chevron.svg";
import "./carrousel.css";
const Carrousel = ({ data }) => {
  const [item, setItem] = useState(0);
  const handleItem = (newValue) => {
    if (newValue >= 0 && newValue < data.length) setItem(newValue);
  };
  const position = item;
  return (
    <div className="card-container w-full">
      <div
        class="flex transition-transform duration-300 ease-in-out px-10"
        style={{ transform: `translateX(-${position * 67}%)` }}
        id="carrousel"
      >
        {data.map((item) => (
          <div class="min-w-[80%] bg-[#0c0c0c] text-white p-6 h-[22rem] mx-2 rounded-lg">
            <div className="h-4/5 overflow-auto mb-2">
              <span className="text-xl">"{item.testimonial}"</span>
            </div>
            <div className="h-1/5">
              <span className="text-lg font-semibold">{item.name}</span>
              <br />
              <span className="text-lg font-light">{item.company}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => handleItem(item - 1)}
          className="arrow w-auto bg-transparent rounded-[50%] hover:bg-[#111111ba] active:bg-[#3f3f3f]"
        >
          <img
            src={chevron.src}
            alt=""
            style={{
              transform: "rotate(270deg)",
              width: "2.2rem",
              opacity: item === 0 ? "0.5" : "",
            }}
          />
        </button>{" "}
        <button
          onClick={() => handleItem(item + 1)}
          className="arrow w-auto bg-transparent rounded-[50%] hover:bg-[#111111ba] active:bg-[#3f3f3f]"
        >
          <img
            src={chevron.src}
            alt=""
            style={{
              transform: "rotate(90deg)",
              width: "2.2rem",
              opacity: item === data.length - 1 ? "0.5" : "",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
