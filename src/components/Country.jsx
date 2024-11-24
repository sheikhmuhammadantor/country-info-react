import React, { useState } from "react";

function Country({ country }) {
  const { name, flags } = country;
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="h-full">
      <div
        className={`card max-w-96 rounded-md p-5 text-black  ${
          visited ? "bg-pink-500" : "bg-slate-400"
        }`}
      >
        <figure className="h-60">
          <img src={flags.png} alt="" className="rounded-md mx-auto" />
        </figure>
        <div className="items-center text-center">
          <h2 className="text-2xl mb-2">{name?.common}</h2>
          <div className="card-actions flex gap-4">
            <button
              onClick={handelVisited}
              className={`btn text-white text-xl border-none ${visited ? 'bg-none' : 'bg-green-600'}`}
            >
              {visited ? "Visited" : "Going"}
            </button>
            <button className={`btn text-white text-lg border-none bg-green-600`}>
              Mark as Visited
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
