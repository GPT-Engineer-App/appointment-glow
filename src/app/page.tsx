"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <header className="w-full py-4 bg-gray-800 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">Company Name</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-purple-500">Sign Up</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-500">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "League Spartan, sans-serif" }}>
          LET US HANDLE YOUR CALLS 24/7
        </h1>
        <div className="mt-8">
          <button className="px-6 py-3 bg-black text-white border-2 border-purple-500 shadow-lg shadow-blue-500/50 hover:bg-purple-500 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}