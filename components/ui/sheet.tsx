import React, { useState } from 'react'

interface SheetProps {
  children: React.ReactNode
}

export function Sheet({ children }: SheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {children}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-4">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  return children
}

export function SheetContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
