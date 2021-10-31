export const TailwindCssSample = () => {
  return (
    <>
      <div className="App">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://source.unsplash.com/random/1600x900/"
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-gray-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </>
    // <div className="flex justify-items-center flex-wrap p-4 bg-green-200">
    //   <input className="focus:ring-2 focus:ring-blue-600 ..." />
    //   <button className="bg-red-500 hover:bg-red-700 ...">Hover me</button>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     1
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     2
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     3
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     4
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     5
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     6
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     7
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     8
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     9
    //   </div>
    //   <div className="flex justify-center items-center m-4 bg-green-400 h-80 w-80 rounded-lg text-9xl">
    //     10
    //   </div>
    // </div>
  );
};
