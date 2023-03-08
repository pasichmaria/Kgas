import React from "react";

export const PageNotFound = () => {

  return (
    <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0  bg-gray-700 ">
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Page Not Found
        </p>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          Вибачте але дана сторінка не знайдена
        </p>
        <a
        NavLink to="/home"
          class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
        >
          <span>Повернутись на головну</span>
        </a>
      </div>
    </div>
  );
};
