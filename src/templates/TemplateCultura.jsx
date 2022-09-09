import React from 'react'
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { BaseTemplate } from './BaseTemplate';

export const TemplateCultura = () => {
  return (
    <BaseTemplate>
        <Header 
          withLogo 
          src='https://especialess3.lanacion.com.ar/LN/newsletter/revistas/cultura.png'
          date='22 de Diciembre de 2022'
          backgroundColor='#ccc'
        />
        <Section 
          href="https://lanacion.com.ar"
          content="Este es un link a La Nacion"
        />
    </BaseTemplate>
  )
}
