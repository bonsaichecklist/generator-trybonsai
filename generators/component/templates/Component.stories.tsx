import React from 'react'
import { <%= name %>, <%= name %>Props } from '.'

export default {
  component: <%= name %>,
  title: "<%= name %>",
}

export function Example(args: <%= name %>Props): JSX.Element {
  return <<%= name %> {...args} />
}
