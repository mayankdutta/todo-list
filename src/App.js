import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  function takeData(event) {
    setData(event.target.value);
  }

  function registerData(event) {
    event.preventDefault();
    setList(function () {
      return [...list, data];
    });
  }

  function del(event) {}
  return (
    <div className="content-center w-screen h-screen bg-gray-700 grid justify-items-center main">
      <div className="flex flex-col py-8 bg-white border-4 border-gray-800 shadow-2xl space-y-8 rounded-2xl">
        <div className="p-4 font-sans text-6xl text-center text-white bg-purple-700 shadow-2xl">
          ToDo List
        </div>
        <form onSubmit={registerData} className="px-4">
          <input
            type="text"
            placeholder="Add a item"
            name="input"
            onChange={takeData}
            value={data}
            className="p-4 font-sans text-2xl border-b-8 border-transparent focus:border-purple-700 focus:outline-none"
          />
          <button
            type="submit"
            className="p-4 text-4xl text-white bg-purple-700 border-8 border-purple-700 rounded-full shadow-2xl hover:border-purple-800 hover:bg-blue-700"
          >
            +
          </button>
        </form>

        <div className="text-center">
          {list.map((d) => {
            return (
              <div className="mx-8 content-center my-2 grid  grid-cols-2 justify-items-center">
                <button
                  onClick={del}
                  className="p-4 text-4xl text-white bg-purple-700 border-8 border-purple-700 rounded-full shadow-2xl hover:border-purple-800 hover:bg-red-700"
                >
                  X
                </button>

                <span className="p-4 font-sans text-4xl"> {d} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
