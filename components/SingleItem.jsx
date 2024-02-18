"use client"
import React, { useContext } from "react";
import { SummaryContext } from "./SummaryProvider";

export default function SingleItem({ item }) {
    const {setSummary} = useContext(SummaryContext)
    function getSummary() {
      const url = "api/summary"

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: item.item_id })
        };
        console.log(requestOptions.body)

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setSummary({
                summary: data,
                name: item?.name,
                description: item?.description || "No description available",
            }));
    }
  return (
    <li>
      <button className="w-1/2 bg-gray-800 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded text-base" onClick={getSummary}>
        {item.name}
      </button>
    </li>
  );
}
