import { css } from 'styled-components';

export const fixed = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left',
} = {}) => {
  return css`
    position: fixed;
    ${yProp}: ${y};
    ${xProp}: ${x};
    right: 0;
  `;
}

export const absolute = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => {
  return css`
    position: absolute;
    ${yProp}: ${x};
    ${xProp}: ${y};
  `;
}