import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function Button({ children, className = 'bg-slate-400' }: ButtonProps) {
  return (
    <button className={`rounded-full text-white ${className ? className : ''}`}>
      {children}
    </button>
  )
}
