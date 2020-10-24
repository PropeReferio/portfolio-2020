/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, width, testimonial, author }) => (
  <div
    css={css`
      height: 100%;
      width: ${width}px;
      padding: 0px 140px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  >
    <h3> {testimonial} </h3>
    <h5> {author} </h5>
  </div>
)

export default Slide
