'use client'
import React, { createContext, useState } from 'react'

export const SummaryContext = createContext({summary: {}, setSummary: (summary) => {}})

export default function SummaryProvider({children}) {
    const [summary, setSummary] = useState({})
  return (
    <SummaryContext.Provider value={{summary, setSummary}}>
    {children}
    </SummaryContext.Provider>
  )
}