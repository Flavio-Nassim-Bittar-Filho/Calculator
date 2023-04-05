import { ReactNode, useState } from 'react'
import { createContext } from 'react'

interface CalculatorContext {
  equation: string
}

export const CalculatorContext = createContext({} as CalculatorContext)

export function CalculatorProvaider({ children }: { children: ReactNode }) {
  const [equation, setEquation] = useState('')

  return (
    <CalculatorContext.Provider value={{ equation }}>
      {children}
    </CalculatorContext.Provider>
  )
}
