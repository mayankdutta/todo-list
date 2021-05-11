
        <div className="text-center">
          <button
            onClick={del}
            className="p-4 text-4xl text-white bg-purple-700 border-8 border-purple-700 rounded-full shadow-2xl hover:border-purple-800 hover:bg-red-700"
          >
            Delete
          </button>

          {data.map((d) => {
            return <span className="font-sans text-4xl"> {d} </span>;
          })}

        </div>
