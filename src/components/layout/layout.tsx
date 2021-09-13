import React from 'react'

type LayoutOptions = {
  fullHeight?: boolean
  showBackButton?: boolean
  hideLogo?: boolean
}

type LayoutProps = {
  children: React.ReactNode
  backgroundColor?: 'default' | 'yellow' | 'green' | 'darkgreen'
  options?: LayoutOptions
}
export const Layout = ({
  children,
  backgroundColor = 'default',
}: LayoutProps) => {
  return <div style={{ backgroundColor }}>{children}</div>
}
