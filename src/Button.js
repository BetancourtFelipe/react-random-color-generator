import { css } from '@emotion/react';
import color from 'randomcolor';

// CSS-in-JS
const button = css`
  background-color: #b0b0b0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export default function Button(props) {
  return (
    <button
      css={button}
      onClick={() =>
        props.setRandomColor(
          color.randomColor({ luminosity: props.luminosity, hue: props.hue }),
        )
      }
    >
      Generate
    </button>
  );
}
