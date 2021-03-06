import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  function takeData(event) {
    setData(event.target.value);
  }

  function registerData(event) {
    // event.preventDefault();
    setList(function () {
      return [...list, data];
    });
    setData("");
  }

  function del(event) {
    console.log("on pressed id is : " + event);
    setList(function (prev) {
      return prev.filter((key, id) => {
        return id !== event;
      });
    });
  }
  return (
    <div className="content-center mt-96 grid justify-items-center main">
      <div className="py-8 my-4 bg-white border-8 border-purple-700 shadow-2xl justify-items-center space-y-8 rounded-2xl">
        <div className="p-4 font-sans text-6xl text-center text-white bg-purple-700 shadow-2xl">
          ToDo List
        </div>
        <div
          // onSubmit={registerData}
          className="px-4"
        >
          <input
            type="text"
            placeholder="Add a item"
            name="input"
            onChange={takeData}
            value={data}
            className="p-4 font-sans text-2xl border-b-8 border-transparent focus:border-purple-700 focus:outline-none"
          />
          <button
            // type="submit"
            onClick={registerData}
            className="px-6 py-3 text-4xl text-white bg-purple-700 border-8 border-purple-700 rounded-full shadow-2xl hover:border-purple-800 hover:bg-blue-700"
          >
            +
          </button>
        </div>

        <div className="text-center">
          {list.map((d, index) => {
            return (
              <div
                id={index}
                key={index}
                className="content-center mx-8 my-2 grid grid-cols-2 justify-items-center"
              >
                <button
                  onClick={() => {
                    del(index);
                  }}
                  className="px-6 py-3 text-4xl text-white bg-purple-700 border-8 border-purple-700 rounded-full shadow-2xl hover:border-purple-800 hover:bg-red-700"
                >
                  X
                </button>

                <span className="p-4 font-sans text-4xl"> {d} </span>
                {console.log("Index is : " + index)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
