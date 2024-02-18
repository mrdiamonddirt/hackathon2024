"use client"
import React, { useContext } from 'react'
import { SummaryContext } from './SummaryProvider'

export default function Summary() {
 const {summary} = useContext(SummaryContext)
  return (
    <div className="grid grid-cols-2 col-span-2">
            <div className="col-span-2 flex">
              <div>
                <h2 className="text-xl font-semibold mb-4">Summarisation</h2>

                {/* {<p>
                  ReviewFluence aggregates product reviews into concise
                  summaries, streamlining the user's research process by
                  condensing multiple reviews into one, saving valuable time. 💡
                </p>} */}
                <p>Overall: {summary?.summary?.summarisation?.overall}</p>
                <p>Positive: {summary?.summary?.summarisation?.positive}</p>
                <p>Neutral: {summary?.summary?.summarisation?.neutral}</p>
                <p>Negative: {summary?.summary?.summarisation?.negative}</p>

              </div>
              <div className="text-xl relative font-semibold mb-4 col-span-3 flex flex-col items-center">
                <img src="Logo.png" alt="ReviewFluence Logo" />
                <h2>Product Name</h2>
                <p className="text-center">Product description</p>
              </div>
            </div>

            {/* <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <ul className="text-lg font-semibold mb-2">Positive</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Neutral</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
                <div>
                  <ul className="text-lg font-semibold mb-2">Negative</ul>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                  <li className="list-circle"></li>
                </div>
              </div>
            </section> */}
          </div>
  )
}
