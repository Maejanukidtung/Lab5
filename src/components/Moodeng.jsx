import { useState, useEffect } from "react";
import moodeng from "../images/moodeng.jpg";
import myPhoto from "../images/image.png";


function Moodeng() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  const handleFoodClick = (points) => {
    setLevel(level + points);
  };

  useEffect(() => {
    let img = document.getElementById('img');
    if (level >= 100) {
        img.src = myPhoto;
        setSize(300);
    }
    

  },[level]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-6">
      <header className="w-full flex justify-between px-4">
        <h1 className="text-2xl font-bold">เกมเลี้ยงหมูเด้ง</h1>
        <button
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => {
            setLevel(0);
            document.getElementById('img').src = moodeng
            setSize(100);
        }}
        >
          Reset
        </button>
      </header>

      <div className="my-6 w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-400 flex justify-center items-center">
        <img
          src={moodeng}
          alt="Moodeng"
          className="rounded-full"
          id='img'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>

      <div className="w-full max-w-sm flex flex-col md:flex-row items-center justify-center mb-4">
        <p className="mr-4 text-lg">Level: {level}</p>
        <div className="w-2/3 md:w-full bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-500 h-4 rounded-full transition-all"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 w-1/2 md:grid-cols-3 gap-4 md:w-full max-w-sm">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleFoodClick(2);
            setSize(size + 4);
          }}
        >
          🍖
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleFoodClick(4);
            setSize(size + 7);
          }}
        >
          🥩
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleFoodClick(6);
            setSize(size + 10);
          }}
        >
          🍗
        </button>
      </div>
    </div>
  );
}

export default Moodeng;
