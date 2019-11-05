import styled from 'styled-components';
import { teal, elevation } from '../utilities';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: ({ theme }) => `
    background: ${theme.colors.secondary};
  `
}

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow;
  background : ${props => props.theme.colors.primary};
  ${elevation[1]};
  &:hover {
    background: ${lighten(0.2, teal)};
    ${elevation[2]};
  }
  ${({ size }) => {
    if (size === "small") {
      return `
      font-size: 1rem;
      padding: 3px 10px;
      `;
    }
  }
  };

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const CancelButton = styled(Button)`
background: tomato;
    &:hover {
      background: ${lighten(0.2, 'tomato')};
      ${elevation[2]};
    }
`;

