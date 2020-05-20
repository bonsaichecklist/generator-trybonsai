import React from 'react'

export interface <%= name %>Props {
  text?: string
}

export function <%= name %>({
  text = 'Hello World!',
}: <%= name %>Props): JSX.Element {
  return <div>{text}</div>
}
