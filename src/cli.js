import React from 'react'
import { render } from 'mjml-react';

import { TemplateCultura } from './templates/TemplateCultura';

const { html } = render(<TemplateCultura />);

console.log(html);
