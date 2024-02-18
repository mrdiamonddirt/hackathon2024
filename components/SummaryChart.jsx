import React from 'react'

import Barchart from './Barchart'
// import Linechart from './Linechart'
export default function SummaryChart() {
  return (
    <div className="mb-8 flex mx-auto items-center justify-center">
         <Barchart />
         {/* <Linechart /> */}
         
          <img
            src="thumbnail_line_plot.png"
            alt="line_plot"
            className="h-32 w-auto"
          />
        </div>
  )
}
