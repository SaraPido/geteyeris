import React, { useState } from 'react'

interface SheetProps {
  children: React.ReactNode
}

export function Sheet({ children }: SheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === SheetTrigger) {
          return React.cloneElement(child, { onClick: () => setIsOpen(true) })
        }
        if (React.isValidElement(child) && child.type === SheetContent) {
          return isOpen ? React.cloneElement(child, { onClose: () => setIsOpen(false) }) : null
        }
        return child
      })}
    </div>
  )
}

interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export function SheetTrigger({ children, asChild }: SheetTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: children.props.onClick })
  }
  return <button onClick={children.props.onClick}>{children}</button>
}

interface SheetContentProps {
  children: React.ReactNode
  onClose?: () => void
}

export function SheetContent({ children, onClose }: SheetContentProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-4">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
