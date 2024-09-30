import React, { useState, ReactNode } from 'react'

interface SheetProps {
  children: ReactNode
}

interface SheetTriggerProps {
  children: ReactNode
  asChild?: boolean
}

interface SheetContentProps {
  children: ReactNode
  onClose?: () => void
}

export function Sheet({ children }: SheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === SheetTrigger) {
            return React.cloneElement(child, {
              onClick: () => setIsOpen(true),
            } as React.HTMLAttributes<HTMLElement>)
          }
          if (child.type === SheetContent) {
            return isOpen
              ? React.cloneElement(child, {
                  onClose: () => setIsOpen(false),
                } as SheetContentProps)
              : null
          }
        }
        return child
      })}
    </div>
  )
}

export function SheetTrigger({ children, asChild }: SheetTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        children.props.onClick?.(event)
        ;(event.currentTarget as HTMLElement).click()
      },
    } as React.HTMLAttributes<HTMLElement>)
  }
  return <button onClick={(event) => (event.currentTarget as HTMLElement).click()}>{children}</button>
}

export function SheetContent({ children, onClose }: SheetContentProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          Close
        </button>
        {children}
      </div>
    </div>
  )
}
