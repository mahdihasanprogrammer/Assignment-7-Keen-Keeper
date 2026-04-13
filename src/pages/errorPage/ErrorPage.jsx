import React from 'react';

const  ErrorPage = ()=> {

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* soft glowing circles */}
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 top-10 left-10" />
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 bottom-10 right-10" />

      <div className="text-center z-10 px-6">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">
          404
        </h1>

        <h2 className="text-2xl mt-4 text-gray-300">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;