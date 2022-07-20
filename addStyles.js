const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls));

const calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2xl bg-pink-700 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
const calcBody = document.querySelector('.calcBody');
calcBodyClass.split(" ").forEach(cls => calcBody.classList.add(cls));

const outputClass = "flex flex-col 2-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector('.output');
outputClass.split(" ").forEach(cls => output.classList.add(cls));