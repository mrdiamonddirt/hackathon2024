"use client"
import React from "react";

export default function SingleItem({ item }) {
  return (
    <li>
      <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base">
        {item.name}
      </button>
    </li>
  );
}
