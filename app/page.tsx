"use client";
import Login from "./Login";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
// import {signOut, useSession} from 'next-auth/react'
import Head from "next/head";
import Image from "next/image";
// import "../styles/page.css"
import Barchart from "@/components/Barchart"
export default function Home() {
  // const session = useSession()
  const [user, setUser] = useState(null);

  return (
    <>
      <Head>
        <title>ReviewFluence</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div>
          <img
            src="Logo.png"
            alt="ReviewFluence Logo"
            className="h-32 w-auto"
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">ReviewFluence</h1>
        <li>{<Login />}</li>
      </header>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-8">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <ul>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 1
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 2
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 3
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 4
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 5
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 6
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 7
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 8
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 9
                </button>
              </li>
              <li>
                <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
                  Product 10
                </button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div className="col-span-2 flex">
              <div>
                <h2 className="text-xl font-semibold mb-4">Summarisation</h2>

                <p>
                  ReviewFluence aggregates product reviews into concise
                  summaries, streamlining the user's research process by
                  condensing multiple reviews into one, saving valuable time. 💡
                </p>
              </div>
              <div className="text-xl relative font-semibold mb-4 col-span-3 flex flex-col items-center">
                <img src="Logo.png" alt="ReviewFluence Logo" />
                <h2>Product Name</h2>
                <p className="text-center">Product description</p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <ul class="text-lg font-semibold mb-2">Positive</ul>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Neutral</ul>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Negative</ul>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                  <li class="list-circle"></li>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mb-8 flex mx-auto items-center justify-center">
         <Barchart />
          <img
            src="Logo.png"
            alt="ReviewFluence Logo"
            className="h-32 w-auto"
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 ReviewFluence. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
