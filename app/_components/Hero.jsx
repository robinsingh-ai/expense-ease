import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center justify-center flex-col h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-green-600 transition duration-500 ease-in-out transform hover:text-green-800">
          ExpenseEase
            <strong className="font-extrabold text-green-600 sm:block"> Simplify Your Spending!</strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
          </p>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-block rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring"
              href="/sign-in"
            >
              Get Started
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
