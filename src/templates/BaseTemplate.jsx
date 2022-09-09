import React from 'react'
import {
    Mjml,
    MjmlBody,
  } from 'mjml-react';

export const BaseTemplate = ({ children }) => {
  return (
    <Mjml>
      <MjmlBody width={600}>
        {children}
      </MjmlBody>
    </Mjml>
  )
}
