import React from "react";

const Filter = (props) => {
  return (
    <>
      <div className="mr-5">
        <button
          onClick={() => props.handleFilter()}
          className="flex flex-row justify-evenly outline-none items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer"
        >
          <p className="font-serif text-sm">Filter</p>
          <i class="fa-solid fa-filter" style={{ color: "#ffffff" }}></i>
        </button>
        {props.filter ? (
          <div>
            <ul>
              <li className="text-sm flex flex-row justify-evenly items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer">
                <button onClick={props.handleLowtoHigh}>Low to high</button>
              </li>
              <li className="text-sm flex flex-row justify-evenly items-center border text-white bg-lime-600 rounded w-20 h-8 cursor-pointer">
                <button onClick={props.handleHightoLow}>High to low</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Filter;
