import React from 'react'
import { render } from '@testing-library/react'
import { <%= name %> } from '.'

describe("components/<%= name %>", () => {
  test("should not explode", () => {
    render(<<%= name %> />)
  })
})
