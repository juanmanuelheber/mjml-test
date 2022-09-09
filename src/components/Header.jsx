import React from 'react'
import { MjmlColumn, MjmlImage, MjmlSection, MjmlText } from 'mjml-react'
import { LogoLN } from './LogoLN'

export const Header = ({withLogo, src, date, backgroundColor="#fefefe"}) => {
  return (
    <MjmlSection backgroundColor={backgroundColor}>
      <MjmlColumn>
        {withLogo && <LogoLN />}
        <MjmlImage src={src} width="299px" />
        {date && (
            <MjmlText 
              align='center'
              fontSize="20px"
              lineHeight='28px'
            >
              {date}
            </MjmlText>
        )}
      </MjmlColumn>
    </MjmlSection>
  )
}
