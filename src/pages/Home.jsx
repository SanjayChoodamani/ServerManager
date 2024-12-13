import React from "react";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        {/* <div>
            <img className="mx-auto md:mx-10 my-5"src="https://silofortune-production.s3.ap-south-1.amazonaws.com/company/2023-08-25-64e82455ba66e.png" width={150} height={150} />
        </div> */}
        <div className="container px-5 py-16 lg:py-24 mx-auto my-auto flex flex-wrap items-center">
          {/* Text Section */}
          <div className="lg:w-2/5 md:w-1/2 pr-8 lg:pl-20"> 
            <h1 className="title-font font-bold text-4xl text-gray-900">
              Silo Fortune Server Control Center
            </h1>
            <p className="leading-relaxed mt-4">
              Streamlining server management for seamless operations and optimal performance within Silo Fortune.
            </p>
          </div>

          {/* Login Section */}
          <div className="lg:w-1/4 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full lg:mt-250 mt-8  md:ml-0 lg:ml-80 "> 
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-600">
               Email Id
              </label>
              <input
                type="email"
                id="email"
                name="email" placeholder="Enter your email Id"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" placeholder="Enter your password"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
