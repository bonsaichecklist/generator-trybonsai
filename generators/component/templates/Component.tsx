import React from "react"

export interface <%= name %>Props {
  children?: React.ReactNode
}

export function <%= name %>({ children }: <%= name %>Props): JSX.Element {
  return (
    <div>{children}</div>
  )
}
