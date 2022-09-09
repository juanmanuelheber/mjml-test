import React from 'react'
import { MjmlColumn, MjmlSection, MjmlText } from 'mjml-react'

export const Section = ({href, content}) => {
  return (
    <MjmlSection>
      <MjmlColumn>
        <MjmlText><a href={href}>{content}</a></MjmlText>
      </MjmlColumn>
    </MjmlSection>
  )
}
