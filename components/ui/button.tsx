import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
  
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-50',
  }

  const sizeStyles = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-2 text-xs',
    lg: 'px-6 py-3 text-base',
    icon: 'p-2',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  )
}
