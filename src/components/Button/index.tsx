import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  value?: string
}

export function Button({
  children,
  className = 'bg-[#333333]',
  value = children as string,
}: ButtonProps) {
  return (
    <button
      value={value}
      onClick={() => console.log(value)}
      className={`rounded-full text-2xl font-medium text-white ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  )
}
